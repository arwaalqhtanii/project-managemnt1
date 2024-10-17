import express from 'express';
import { postProject,getProjectsForStudents ,deleteProject,getProjectsForStudent,getProjectById,getProjectsForAdminStudent,getProjectsForAdmin,updateProjectStatus,getAcceptedProjectsFromAdmin,deleteProjectAdmin,getStudentProjectCounts,getAdminProjectCounts} from '../Controllers/projectController.js';
import { authenticateToken } from '../Middleware/Auth.js';

const router = express.Router();

router.post('/addProject', authenticateToken, postProject); // Student creates a project
router.get('/my-projects', authenticateToken, getProjectsForStudents); // For students to get their projects
router.delete('/projects/:projectId', authenticateToken, deleteProject);//student project delete
router.get('/projects/admin', authenticateToken, getProjectsForAdmin);//get project for her students
router.put('/updateProject/:id', authenticateToken, updateProjectStatus);
router.get('/projects/accepted', authenticateToken, getAcceptedProjectsFromAdmin);
router.delete('/deleteProjectAdmin/:id', authenticateToken, deleteProjectAdmin);
router.get('/projects/student/counts', authenticateToken, getStudentProjectCounts);
router.get('/projects/admin/counts', authenticateToken, getAdminProjectCounts);
router.get('/projects/admin/students', authenticateToken, getProjectsForAdminStudent);//get project for her students
router.get('/projects/student/:studentId',authenticateToken, getProjectsForStudent);
router.get('/admin/projects/:id', authenticateToken, getProjectById); // New endpoint


export default router;
