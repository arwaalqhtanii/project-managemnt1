import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from 'react-toastify';
import StudentIdeaItems from '../components/StudentIdeaItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StudentIdeas() {
    const { studentId } = useParams();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState({});
    const [comment, setComment] = useState('');
    const [isRejected, setIsRejected] = useState(false); // Track if the project is rejected

   
    const fetchProjects = async () => {
        const token = localStorage.getItem('Token');
        if (!token) {
            setError('No token found. Please log in.');
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5040/projects/projects/student/${studentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProjects(response.data.projects);
            setLoading(false);
        } catch (err) {
            setError('Error fetching projects: ' + (err.response?.data?.message || err.message));
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [studentId]);

    const ShowDetailsFN = async (projectId) => {
        const token = localStorage.getItem('Token');
        try {
            const response = await axios.get(`http://localhost:5040/projects/admin/projects/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSelectedProject(response.data.project);
            setComment(response.data.project.comment || ''); // Load existing comment if any
            setIsRejected(false); // Reset rejected state when showing details
        } catch (error) {
            console.error('Error fetching project details:', error);
        }
    };

    const handleUpdateStatus = async (status) => {
        const token = localStorage.getItem('Token');
        console.log('Updating project ID:', selectedProject._id);
        
        try {
            const updatedProject = {
                ...selectedProject,
                status: status,
                comment: comment,
            };
            
            await axios.put(`http://localhost:5040/projects/updateProject/${selectedProject._id}`, updatedProject, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Refresh the projects after updating
            await fetchProjects(); // Call the fetchProjects function here
            setIsRejected(status === 'rejected'); // Set rejection state
            toast.success('Your project update has been submitted successfully!');

        } catch (error) {
            console.error('Error updating project status:', error);
        }
    };
    

    const handleDeleteProject = async () => {
        const token = localStorage.getItem('Token');
        try {
            await axios.delete(`http://localhost:5040/projects/deleteProjectAdmin/${selectedProject._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            await fetchProjects(); // Refresh the project list after deletion
            setSelectedProject({}); // Clear selected project after deletion
            setIsRejected(false); // Reset rejection state
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className="flex flex-col  bg-gray-100">
            <Navbar />
            <main className="flex-1 flex justify-center items-center pt-8">
                <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <header className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white p-6 flex flex-col items-center">
                        <h2 className="text-4xl font-bold">Student Ideas</h2>
                        <div className="mt-4 w-full max-w-md">
                            <h1>{error}</h1>
                            <div className="relative">
                                {/* <input
                                    type="search"
                                    className="h-12 w-full bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black pl-4 pr-10"
                                    placeholder="Search..."
                                /> */}
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full overflow-auto">
                            <h3 className="font-semibold text-lg mb-4">Ideas List</h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <p>Loading projects...</p>
                                ) : (
                                    projects.map((project, index) => (
                                        <StudentIdeaItems
                                            key={project.projectId}
                                            number={index + 1}
                                            title={project.title}
                                            showDetailsFN={() => ShowDetailsFN(project.projectId)}
                                            status={project.status}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full">
                            <h3 className="font-semibold text-lg mb-4">Idea Details</h3>
                            <div className="mb-4">
                                <label className="font-semibold">Title</label>
                                <input
                                    type="text"
                                    className="h-12 w-full bg-white rounded-lg border border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={selectedProject.title || ''}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold">Description</label>
                                <textarea
                                    className="min-h-[35vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    value={selectedProject.description || ''}
                                    readOnly
                                />
                            </div>
                            <div className="flex gap-3 mb-4">
                                <button
                                    className="h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 font-semibold shadow-md"
                                    onClick={() => handleUpdateStatus('approved')}
                                >
                                    Approved
                                </button>
                                <button
                                    className="h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-6 font-semibold shadow-md"
                                    onClick={() => handleUpdateStatus('rejected')}
                                >
                                    Rejected
                                </button>
                                <button
                                    className={`h-12 ${!isRejected ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg px-6 font-semibold shadow-md`}
                                    disabled={!isRejected}
                                     onClick={handleDeleteProject} // Call delete function
                                
                                    // Add delete function here if needed
                                >
                                    Delete
                                </button>
                            </div>
                            <div>
                                <label className="font-semibold">Comment</label>
                                <textarea
                                    className="min-h-[25vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default StudentIdeas;
