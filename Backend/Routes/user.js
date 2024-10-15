import express from 'express';
import { registerAdmin, registerStudent,getAllStudents,assignStudents,getAllAdmins,deleteAdminsByEmail,deleteStudentById,loginAdmin,loginStudent } from '../Controllers/userController.js';
import {authenticateToken} from '../Middleware/Auth.js'

const router = express.Router();

// Admin registration
router.post('/register/admin', registerAdmin);


// Admin login route
router.post('/login/admin', loginAdmin);

// Student registration
router.post('/register/student', registerStudent);

//Student login route
router.post('/login/student', loginStudent); 


// Get all students
router.get('/students', getAllStudents);

//Delete students by id
router.delete('/students/:id', deleteStudentById);


// Get all Admin
router.get('/admins', getAllAdmins);

// Delete admins by email
router.delete('/admins', deleteAdminsByEmail);


// Assign students to admin
router.post('/assign-students', authenticateToken, assignStudents);


// ... other routes
export default router;
