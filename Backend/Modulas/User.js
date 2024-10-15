import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['admin', 'student'], required: true },
    assignedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Only for admins
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
