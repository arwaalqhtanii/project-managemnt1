import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import StudentIdeaItems from '../components/StudentIdeaItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StudentIdeas() {
    const { studentId } = useParams();

    console.log("test"+studentId);
    
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const token = localStorage.getItem('Token'); // Retrieve the token
            console.log(token);
            
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
                console.log(response.data.projects);
                
              
                setProjects(response.data.projects); // Adjust based on your response structure
                setLoading(false);
            } catch (err) {
                setError('Error fetching projects: ' + (err.response?.data?.message || err.message));
            }
        };

        fetchProjects();
    }, [studentId]);



    function DeleteIdeaFN() {
        // Logic to delete idea
    }

    function ShowDetailsFN() {
        // Logic to show details
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Navbar />
            <main className="flex-1 flex justify-center items-center pt-8">
                <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <header className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white p-6 flex flex-col items-center">
                        <h2 className="text-4xl font-bold">Student Ideas</h2>
                        <div className="mt-4 w-full max-w-md">
                            <h1>{error}</h1>
                            <div className="relative">
                                <input
                                    type="search"
                                    className="h-12 w-full bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black pl-4 pr-10" // تعديل العرض والمسافات
                                    placeholder="Search..."
                                    value={searchTerm} // ربط قيمة البحث بحالة البحث
                                    onChange={(e) => setSearchTerm(e.target.value)} // تحديث حالة البحث عند الكتابة
                                />
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        {/* Left Side for Ideas List */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full overflow-auto">
                            <h3 className="font-semibold text-lg mb-4">Ideas List</h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <p>Loading projects...</p>
                                ) : (
                                    projects.map((project, index) => (
                                        <>
                                        <h1>test</h1>
                                        <StudentIdeaItems
                                            key={project.projectId}
                                            number={index + 1}
                                            title={project.title}
                                            deleteFN={DeleteIdeaFN}
                                            showDetailsFN={ShowDetailsFN}
                                            status={project.status}
                                        />
                                        </>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Right Side for Idea Details */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full">
                            <h3 className="font-semibold text-lg mb-4">Idea Details</h3>
                            <div className="mb-4">
                                <label className="font-semibold">Title</label>
                                <input
                                    type="text"
                                    className="h-12 w-full bg-white rounded-lg border border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    defaultValue="Project Title"
                                    value={selectedProject.title}
                                    readOnly // Set as read-only
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold">Description</label>
                                <textarea
                                    className="min-h-[35vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    placeholder="Enter description..."
                                    value={selectedProject.description}
                                    readOnly // Set as read-only
                                />
                            </div>
                            <div className="flex gap-3 mb-4">
                                <button
                                    className="h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 font-semibold shadow-md"
                                    onClick={handleApproveClick} // Call API to approve
                                >
                                    Approved
                                </button>
                                <button
                                    className="h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-6 font-semibold shadow-md"
                                    onClick={handleRejectClick} // Set reject button
                                >
                                    Rejected
                                </button>
                                <button
                                    className={`h-12 ${!isRejected ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg px-6 font-semibold shadow-md`}
                                    disabled={!isRejected} // Disable delete button unless rejected
                                >
                                    Delete
                                </button>
                            </div>
                            <div>
                                <label className="font-semibold">Comment</label>
                                <textarea
                                    className="min-h-[25vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    placeholder="Add your comments..."
                                    value={comment}
                                    onChange={(e)=>{setComment(e.target.value)}}
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
