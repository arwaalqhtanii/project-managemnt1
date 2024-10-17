import express from 'express';
import { connectDB } from './Database/connect.js';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.js'; 
import cors from 'cors'; // Import cors
import projectRoutes from './Routes/Project.js'; // If you have project routes
import { authenticateToken } from './Middleware/Auth.js'; // If using token authentication


dotenv.config(); 

const app = express();
const port = process.env.PORT;

// Use cors middleware
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend origin
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));


app.use(express.json());

connectDB(); 

app.use('/users', userRoutes);
app.use('/projects', authenticateToken, projectRoutes); // Project routes (protected)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
