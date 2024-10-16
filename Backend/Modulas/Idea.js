import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
    ideaTitle: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    comment: { type: String, required: false },
    ideaStatus: { 
        type: String, 
        enum: ['rejected', 'pending', 'approved'],
        default: 'pending', 
        required: true 
    },
}, {
    timestamps: true,
});

const Idea = mongoose.model('Idea', ideaSchema);
export default Idea;