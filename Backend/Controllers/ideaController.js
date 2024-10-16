import Idea from '../Modulas/Idea.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const ideaUpload = async (req, res) => {
    try {
        const { ideaTitle, description } = req.body;

        if (!ideaTitle || !description) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // إنشاء فكرة جديدة
        const newIdea = new Idea({
            ideaTitle,
            description,
            ideaStatus: 'pending',
        });


        const savedIdea = await newIdea.save();
        res.status(201).json({ message: "Idea uploaded successfully", savedIdea });
    } catch (error) {
        res.status(500).json({ message: "Error uploading idea", error });
    }
};


export const ideaDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const idea = await Idea.findById(id);
        if (!idea) {
            return res.status(404).json({ message: "Idea not found." });
        }

        await Idea.findByIdAndDelete(id);
        res.status(200).json({ message: "Idea deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting idea", error });
    }
};


export const ideaRejected = async (req, res) => {
    try {
        const { id } = req.params;

        const idea = await Idea.findById(id);
        if (!idea) {
            return res.status(404).json({ message: "Idea not found." });
        }

        idea.ideaStatus = 'rejected';
        await idea.save();
        res.status(200).json({ message: "Idea rejected successfully.", idea });
    } catch (error) {
        res.status(500).json({ message: "Error rejecting idea", error });
    }
};


export const ideaApproved = async (req, res) => {
    try {
        const { id } = req.params;

        const idea = await Idea.findById(id);
        if (!idea) {
            return res.status(404).json({ message: "Idea not found." });
        }

        idea.ideaStatus = 'approved';
        await idea.save();
        res.status(200).json({ message: "Idea approved successfully.", idea });
    } catch (error) {
        res.status(500).json({ message: "Error approving idea", error });
    }
};


export const ideaAddComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        const idea = await Idea.findById(id);
        if (!idea) {
            return res.status(404).json({ message: "Idea not found." });
        }

        if (!comment) {
            return res.status(400).json({ message: "Comment is required." });
        }

        idea.comment = comment;
        await idea.save();
        res.status(200).json({ message: "Comment added successfully.", idea });
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error });
    }
};

export const getIdeasByStudent = async (req, res) => {
    try {
        const { studentId } = req.params;

        const studentIdeas = await Idea.find({ studentId });

        if (!studentIdeas.length) {
            return res.status(404).json({ message: "No ideas found for this student." });
        }

        res.status(200).json({ message: "Ideas retrieved successfully.", studentIdeas });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving ideas", error });
    }
};