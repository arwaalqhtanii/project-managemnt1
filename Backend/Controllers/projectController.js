// controllers/projectController.js
import Project from '../Modulas/Project.js';
import User from '../Modulas/User.js';

//students post project
export const postProject = async (req, res) => {
    const { title, description } = req.body;
    const studentId = req.user.id; // Get the logged-in student's ID

    try {
        const project = new Project({ title, description, studentId });
        await project.save();
        res.status(201).json({ message: 'Project created successfully', project });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


//student get project 
export const getProjectsForStudents = async (req, res) => {
    const studentId = req.user.id;

    try {
        const projects = await Project.find({ studentId, $or: [{ deleted: false }, { status: 'rejected' }] });

        res.status(200).json({ projects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};



//delete project by id (((trace justt !!!!!!!! )))
export const deleteProject = async (req, res) => {
    const { projectId } = req.params; // Expecting the project ID in the URL

    try {
        const project = await Project.findByIdAndDelete(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//admin get project for her students 
export const getProjectsForAdmin = async (req, res) => {
    const adminId = req.user.id; // Ensure this is set correctly

    try {
        // Find the admin and populate their assigned students
        const admin = await User.findById(adminId).populate('assignedStudents');

        if (!admin || admin.userType !== 'admin') {
            return res.status(403).json({ message: 'Only admins can view this information.' });
        }

        // Get the IDs of the assigned students
        const studentIds = admin.assignedStudents.map(student => student._id);

        if (!studentIds.length) {
            return res.status(404).json({ message: 'No students found for this admin.' });
        }

        // Find projects for the students
        const projects = await Project.find({ studentId: { $in: studentIds }, deleted: false });

        // Transform project data for admin view
        const adminProjects = projects.map(project => ({
            ...project.toObject(),
            status: project.status === 'waiting' ? 'pending' : project.status // Change status for admin view
        }));

        res.status(200).json({ projects: adminProjects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




//update project status  and comments from admin
export const updateProjectStatus = async (req, res) => {
    const { id } = req.params;
    const { status, comment } = req.body; // Destructure status and comment

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Update the project status
        project.status = status;

        // Only push valid comments
        if (comment && typeof comment === 'string' && comment.trim() !== '') {
            project.comments.push(comment); // Add the comment
        }

        await project.save(); // Save the updated project

        res.status(200).json({ message: 'Project status updated successfully', project });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


//getAcceptedProjectsFromAdmin
export const getAcceptedProjectsFromAdmin = async (req, res) => {
    const studentId = req.user.id; // Get the logged-in student's ID

    try {
        // Find the admin assigned to the student
        const admin = await User.findOne({ assignedStudents: studentId });

        if (!admin) {
            return res.status(404).json({ message: 'No admin found for this student.' });
        }

        // Fetch all accepted projects from the admin
        const acceptedProjects = await Project.find({
            adminId: admin._id, // Get projects accepted by the found admin
            status: 'accepted'
        }).populate('studentId', 'username'); // Optionally populate the student info

        if (!acceptedProjects.length) {
            return res.status(200).json({ message: 'No accepted projects found.', projects: [] });
        }

        res.status(200).json({ projects: acceptedProjects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//deleteProject from Admin
export const deleteProjectAdmin = async (req, res) => {
    const { id } = req.params; // Get the project ID from the request parameters

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Set the project as deleted
        project.deleted = true;
        await project.save();

        res.status(200).json({ message: 'Project marked as deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//get count for students 
export const getStudentProjectCounts = async (req, res) => {
    const studentId = req.user.id; // Get the logged-in student's ID

    try {
        // Get projects for the logged-in student that are not deleted
        const projects = await Project.find({ studentId, deleted: false });

        // Initialize counters
        let counts = {
            waiting: 0,
            accepted: 0,
            rejected: 0,
        };

        // Count statuses
        projects.forEach(project => {
            if (project.status === 'waiting') {
                counts.waiting++;
            } else if (project.status === 'accepted') {
                counts.accepted++;
            } else if (project.status === 'rejected') {
                counts.rejected++;
            }
        });

        res.status(200).json({ counts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//getAdminProjectCounts
export const getAdminProjectCounts = async (req, res) => {
    const adminId = req.user.id; // Get the logged-in admin's ID

    try {
        // Find the admin and populate their assigned students
        const admin = await User.findById(adminId).populate('assignedStudents');

        if (!admin || admin.userType !== 'admin') {
            return res.status(403).json({ message: 'Only admins can view this information.' });
        }

        // Get the IDs of the assigned students
        const studentIds = admin.assignedStudents.map(student => student._id);
        const studentCount = admin.assignedStudents.length; // Count of assigned students

        if (!studentIds.length) {
            return res.status(404).json({ message: 'No students found for this admin.' });
        }

        // Get projects that are not deleted
        const projects = await Project.find({ studentId: { $in: studentIds }, deleted: false });

        // Initialize counters
        let counts = {
            waiting: 0,
            accepted: 0,
            rejected: 0,
        };

        // Count statuses
        projects.forEach(project => {
            if (project.status === 'waiting') {
                counts.waiting++;
            } else if (project.status === 'accepted') {
                counts.accepted++;
            } else if (project.status === 'rejected') {
                counts.rejected++;
            }
        });

        // Return counts and student number
        res.status(200).json({ 
            counts,
            studentCount 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};






