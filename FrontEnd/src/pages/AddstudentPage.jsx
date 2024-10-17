
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci"; // استيراد أيقونة البحث فقط
import AddstudentItems from '../components/AddstudentItems';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

function AddstudentPage() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5040/users/students');
                setStudents(response.data);
            } catch (err) {
                setError('Failed to fetch students');
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    // تصفية الطلاب بناءً على البحث
    const filteredStudents = students.filter(student =>
        student.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // وظيفة إضافة الطالب
    const handleAddStudent = async (studentId, studentName) => {
        const token = localStorage.getItem('Token');

        try {
            const response = await axios.post(
                'http://localhost:5040/users/assign-students',
                { studentIds: [studentId] }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                setModalMessage(`The student ${studentName} has been added successfully.`);
            } else {
                setModalMessage(`Failed to add student. Response status: ${response.status}.`);
            }
        } catch (error) {
            setModalMessage(`An error occurred while adding the student.`);
        } finally {
            setIsModalOpen(true);
        }
    };

    // إغلاق الـ Modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className='flex-grow min-h-screen flex flex-col items-center justify-center p-4'>
                <div className='w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
                    <div className="w-full border-b-4 border-[#2B39A0] mb-4">
                        <h2 className="text-3xl font-bold text-black pb-2 text-left">Add Students</h2>
                    </div>

                    {/* شريط البحث */}
                    <div className='flex w-full mb-4 justify-between items-center'>
                        <div className='flex w-1/2 justify-start items-center mx-auto' style={{ marginLeft: '20px' }}>
                            <div className='relative w-80'>
                                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                    <CiSearch className="text-gray-500" />
                                </div>
                                <input
                                    type='search'
                                    className='block w-full pl-10 pr-6 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    autoComplete="on"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    {/* استخدم أيقونة المتصفح الافتراضية */}
                                </div>
                            </div>
                        </div>

                        {/* زر "My Students" */}
                        <button
                            onClick={() => navigate('/admin')}
                            className="hidden md:flex items-center bg-gradient-to-r from-[#4B6DAB] to-[#2B39A0] text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                        >
                            My Students
                        </button>
                    </div>

                    {/* عرض الطلاب */}
                    <div className='w-full flex flex-col items-center overflow-y-auto gap-y-2 pb-4'>
                        <div className='flex w-full justify-between items-center py-2 border-b-2 border-gray-300'>
                            <p className='font-semibold hidden md:block'>Name</p>
                            <p className='font-semibold text-sm'>Email</p>
                            <p className='w-[50px]'></p>
                        </div>
                        {filteredStudents.map((student, index) => (
                            <AddstudentItems
                                key={index}
                                name={student.username}
                                studentEmail={student.email}
                                addstudentFN={() => handleAddStudent(student._id, student.username)}
                            />
                        ))}
                    </div>

                    {/* Modal */}
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
