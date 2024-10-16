import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // New field for the admin
    status: { type: String, default: 'waiting' }, // Default status for student-created projects
    deleted: { type: Boolean, default: false }, // New field
    comments: [{ type: String }],
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
