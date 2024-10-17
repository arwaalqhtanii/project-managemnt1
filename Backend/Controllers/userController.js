import User from '../Modulas/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Admin
export const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }


    // Check if email ends with @tuwaiq.com
    if (email.endsWith('@tuwaiq.com')) {
        return res.status(400).json({ message: 'Admin email must not end with @tuwaiq.com' });
    }

     // Check password length
     if (password.length < 5) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long.' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, userType: 'admin',assignedStudents: [] // Initialize as empty for admins
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'Admin registered successfully', user: newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//Login Admin
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Check password length
    if (password.length < 5) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long.' });
    }
   

    try {
        const admin = await User.findOne({ email, userType: 'admin' });
        if (!admin) {
            return res.status(401).json({ message: 'This account not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password Not correct!' });
        }

        // Generate a token for the admin including username
        const token = jwt.sign(
            { id: admin._id, email: admin.email, username: admin.username, userType: admin.userType },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Exclude sensitive information
        const { password: _, ...adminInfo } = admin._doc; // Exclude password

        res.status(200).json({ message: 'Login successful', user: adminInfo, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Register Student
export const registerStudent = async (req, res) => {
    const { username, email, password } = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Check if email ends with @tuwaiq.com
    if (!email.endsWith('@tuwaiq.com')) {
        return res.status(400).json({ message: 'Student email must end with @tuwaiq.com' });
    }

    // Check password length
    if (password.length < 5) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long.' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            username, 
            email, 
            password: hashedPassword, 
            userType: 'student' ,// No assignedStudents for students
            AdminId:null
        });
        await newUser.save();

        // Generate a token for the student
        const token = jwt.sign({ id: newUser._id, email: newUser.email, userType: newUser.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Exclude sensitive information and fields like assignedStudents from response
        const { password: _, assignedStudents, ...studentInfo } = newUser._doc; // Exclude password and assignedStudents

        res.status(201).json({ message: 'Student registered successfully', user: studentInfo, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//login Student 
export const loginStudent = async (req, res) => {
    const { email, password } = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Check password length
    if (password.length < 5) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long.' });
    }

    try {
        const student = await User.findOne({ email, userType: 'student' });
        if (!student) {
            return res.status(401).json({ message: 'This account not found !' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password not correct !' });
        }

        // Generate a token for the student
        const token = jwt.sign(
            { id: student._id, email: student.email, username: student.username, userType: student.userType },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Exclude sensitive information and fields like assignedStudents from response
        const { password: _, assignedStudents, ...studentInfo } = student._doc; // Exclude password and assignedStudents

        res.status(200).json({ message: 'Login successful', user: studentInfo, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


//delete students by Id
export const deleteStudentById = async (req, res) => {
    const { id } = req.params; // Get the ID from the URL parameters

    try {
        const result = await User.deleteOne({ _id: id, userType: 'student' });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all students (for admin to choose from)
export const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ userType: 'student' }).select('-assignedStudents');
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//get all admin
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ userType: 'admin' }); // Assuming userType field exists
        res.status(200).json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching admins' });
    }
};



// Delete Admins by Email
export const deleteAdminsByEmail = async (req, res) => {
    try {
        const result = await User.deleteMany({ email: /@twaiq.com$/ }); // Using regex to match emails
        res.status(200).json({ message: `${result.deletedCount} admin(s) deleted successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting admins' });
    }
};


// Assign students to an admin
export const assignStudents = async (req, res) => {
    const { studentIds } = req.body; // Array of student IDs to assign

    try {
        const admin = await User.findById(req.user.id); // Assuming authenticateToken sets req.user
        if (!admin || admin.userType !== 'admin') {
            return res.status(403).json({ message: 'Only admins can assign students' });
        }

        // Add student IDs to admin's assignedStudents array
        admin.assignedStudents.push(...studentIds);
        await admin.save();

        res.status(200).json({ message: 'Students assigned successfully', assignedStudents: admin.assignedStudents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch associated students for an admin
export const getAssignedStudents = async (req, res) => {
    try {
        const admin = await User.findById(req.user.id).populate('assignedStudents'); // Populate the assigned students
        
        if (!admin || admin.userType !== 'admin') {
            return res.status(403).json({ message: 'Only admins can view assigned students' });
        }

        // Return the populated student data
        res.status(200).json({ assignedStudents: admin.assignedStudents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
