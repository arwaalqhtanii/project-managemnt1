
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; // استيراد أيقونة الإزالة
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Addstudent from '../components/Addstudent';
import axios from 'axios';

function Admin() {
    const navigate = useNavigate();
    const [addPopStatus, setAddStatus] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const rowsPerPage = 4;

    const [studentsData, setStudentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchAssignedStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5040/users/assignedStudents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`,
                },
            });
            setStudentsData(response.data.assignedStudents);
        } catch (err) {
            setError('Failed to fetch assigned students');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
     

        fetchAssignedStudents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const start = currentPage * rowsPerPage;
    const currentRows = studentsData.slice(start, start + rowsPerPage);
    const totalPages = Math.ceil(studentsData.length / rowsPerPage);

    function showAdd() {
        setAddStatus(true);
    }

    function hideAdd() {
        setAddStatus(false);
    }

    function showIdeasFN(index) {
        if (index !== undefined) {
            navigate(`/studentideas/${index}`);
        } else {
            console.error("Index is undefined");
        }
    }

    function DeleteStudentFN() {
        // Logic to delete a student
    }

    // تنظيف شريط البحث
    const clearSearch = () => {
        setSearchTerm('');
    };
    
    const deleteStudentById = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this student?');
    
        if (!confirmed) {
            return; // If the user clicked "Cancel", exit the function
        }
    
        console.log(id);
        
        const token = localStorage.getItem('Token'); // If using token authentication
        try {
            await axios.delete(`http://localhost:5040/users/students/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token if needed
                },
            });
            // Refresh the list after deletion
            fetchAssignedStudents();
        } catch (error) {
            console.error('Error deleting student:', error);
            setError('Error deleting student: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {addPopStatus && (
                <Addstudent hidePopFN={hideAdd} />
            )}
            <Navbar />

            <div className='flex-grow min-h-screen flex flex-col items-center justify-center p-4'>
                <div className='w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
                    <div className="w-full border-b-4 border-[#2B39A0] mb-4">
                        <h1 className='text-3xl font-bold text-black pb-2 text-left'>
                            My Students
                        </h1>
                    </div>
                    <div className='flex w-full mb-4 justify-between items-center'>
                        {/* شريط البحث المعدل */}
                        <div className='flex md:w-[90%] max-sm:w-1/2 justify-start items-center mx-auto'>
                            <div className='relative w-80'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <CiSearch className="text-gray-500" />
                                </div>
                                <input
                                    type='search'
                                    className='block w-full pl-10 pr-6 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    placeholder="Search for a student..."
                                    value={searchTerm}
                                    autoComplete="off"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AiOutlineClose
                                            className="text-gray-500 cursor-pointer"
                                            onClick={clearSearch}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* زر إضافة طالب */}
                        <button
                            className="hidden md:flex items-center bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white px-1 py-1 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                            onClick={() => navigate('/addstudent')}
                        >
                            <FaPlus className="mr-2 w-4 h-4" /> Add Student
                        </button>
                    </div>

                    {/* Button for small screens */}
                    <div className="flex w-full justify-center md:hidden mb-4">
                        <button
                            className="flex items-center bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                            onClick={() => navigate('/addstudent')}
                        >
                            <FaPlus className="mr-2 w-4 h-4" /> Add Student
                        </button>
                    </div>

                    <div className="overflow-hidden w-full rounded-lg shadow-lg">
                        <table className="min-w-full bg-white rounded-lg">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white">
                                    <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold hidden md:table-cell">Name</th>
                                    <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Email</th>
                                    <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows
                                    .filter(student => 
                                        student.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                        student.email.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((student, index) => (
                                    <tr key={index} className="hover:bg-blue-50 transition duration-300">
                                        <td className="p-4 text-center border-b border-gray-200 text-gray-800 hidden md:table-cell">{student.username}</td>
                                        <td className="p-4 text-center border-b border-gray-200 text-gray-800 text-sm md:text-base">{student.email}</td>
                                        <td className="p-4 text-center border-b border-gray-200 text-gray-800">
                                            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4">
                                                <button 
                                                    onClick={() => showIdeasFN(student._id)} 
                                                    className="flex items-center text-[#3a46a1] hover:text-blue-500 mb-2 md:mb-0"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3a46a1">
                                                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                                                    </svg>
                                                </button>
                                                <button 
                                onClick={() => deleteStudentById(student._id)} // Call delete function on click
                                className="flex items-center text-red-600 hover:text-red-400"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff0000">
                                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))} 
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-center w-full mt-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                            className={`flex items-center p-2 rounded-full ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2B39A0] text-white hover:bg-[#444c8a]'}`}
                            disabled={currentPage === 0}
                        >
                            <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="mx-4 text-lg">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => (prev + 1) < totalPages ? prev + 1 : prev)}
                            className={`flex items-center p-2 rounded-full ${currentPage + 1 >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2B39A0] text-white hover:bg-[#444c8a]'}`}
                            disabled={currentPage + 1 >= totalPages}
                        >
                            <FaChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Admin;
