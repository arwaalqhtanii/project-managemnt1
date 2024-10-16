import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AddstudentItems from '../components/AddstudentItems';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AddstudentPage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // Sample student data
    const studentsData = [
        { name: "Yousef", email: "yohejazi@gmail.com" },
        { name: "Khaled", email: "khaled@example.com" },
        { name: "Ahmad", email: "ahmad@example.com" },
    ];

    // Function to handle student addition
    const handleAddStudent = (studentName) => {
        setModalMessage(`The student ${studentName} has been added successfully.`);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className='flex-grow min-h-screen flex flex-col items-center justify-center p-4'>
                <div className='w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
                    <div className="w-full border-b-4 border-[#2B39A0] mb-4">
                        <h2 className="text-3xl font-bold text-black pb-2 text-left">Add Students</h2>
                    </div>
                    {/* Search Bar and Button */}
                    <div className='flex w-full mb-4 justify-between items-center'>
                        <div className='flex w-1/2 justify-center items-center mx-auto'>
                            <div className='h-[35px] w-[fit-content] px-[15px] flex justify-center bg-gray-200 rounded-l-[10px] items-center border-r-[1px] border-gray-400'>
                                <CiSearch />
                            </div>
                            <input
                                type='search'
                                className='h-[35px] w-80 bg-gray-200 rounded-r-[10px] focus:outline-none px-2'
                                placeholder="Search by name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* This button will be hidden on small screens */}
                        <button
                            onClick={() => navigate('/admin')} // Navigates to My Students page
                            className="hidden md:flex items-center bg-gradient-to-r from-[#4B6DAB] to-[#2B39A0] text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                        >
                            My Students
                        </button>
                    </div>

                    {/* Button visible only on small screens */}
                    <div className="flex w-full justify-center md:hidden mb-4">
                        <button
                            onClick={() => navigate('/admin')} // Navigates to My Students page
                            className="flex items-center bg-gradient-to-r from-[#4B6DAB] to-[#2B39A0] text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                        >
                            My Students
                        </button>
                    </div>

                    {/* List of Students */}
                    <div className='w-full flex flex-col items-center overflow-y-auto gap-y-2 pb-4'>
                        {/* عناوين الجدول */}
                        <div className='flex w-full justify-between items-center py-2 border-b-2 border-gray-300'>
                            <p className='font-semibold hidden md:block'>Name</p>
                            <p className='font-semibold text-sm'>Email</p>
                            <p className='w-[50px]'></p>
                        </div>
                        {/* بيانات الطلاب */}
                        {studentsData.map((student, index) => (
                            <AddstudentItems
                                key={index}
                                name={student.name}
                                studentEmail={student.email}
                                addstudentFN={() => handleAddStudent(student.name)} // Call the handler function here
                            />
                        ))}
                    </div>

                    {/* Modal for success message */}
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                                <h3 className="text-lg font-semibold mb-4">Success</h3>
                                <p>{modalMessage}</p>
                                <button
                                    onClick={closeModal}
                                    className="mt-4 bg-gradient-to-r from-[#4B6DAB] to-[#2B39A0] text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddstudentPage;
