import express from 'express';
import { getIdeasByStudent, ideaAddComment,ideaApproved,ideaRejected,ideaDelete,ideaUpload } from '../Controllers/ideaController.js';
import {authenticateToken} from '../Middleware/Auth.js'

const router = express.Router();

router.post('/register/admin', registerAdmin);



export default router;