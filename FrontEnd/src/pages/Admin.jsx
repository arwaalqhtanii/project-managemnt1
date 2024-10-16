import { useState } from 'react';
import { FaRegUserCircle, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import StudentAdminItems from '../components/StudentAdminItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Addstudent from '../components/Addstudent';
function Admin() {
    const navigate = useNavigate();
    const [addPopStatus, setAddStatus] = useState(false);

    function showAdd() {
        setAddStatus(true);
    }

    function hideAdd() {
        setAddStatus(false);
    }

    function showIdeasFN(id) {
        navigate(`/studentideas/${id}`);
    }

    function DeleteStudentFN(){

    }

    return (
        <div className="container flex flex-col mx-auto gap-y-[1.5rem] relative">
            {addPopStatus && (<Addstudent
                hidePopFN={hideAdd}
            ></Addstudent>)}
            <Navbar />

            <div className='flex justify-center w-[100vw]'>
                <div className='w-[60vw] max-md:w-[90vw] flex flex-col gap-y-[1rem] shadow-lg h-[80vh] rounded-[15px] p-[20px]'>
                    <div className='flex max-md:flex-col max-md:gap-y-[0.5rem] justify-between items-center'>
                        <h1 className='border-b-4 border-[#2B39A0] text-3xl font-bold text-black pb-2'>My Students</h1>
                        <div className='flex w-[50%] max-md:w-[100%] justify-center items-center'>
                            <div className='h-[40px] w-[fit-content] px-[23px] flex justify-center bg-gray-200 rounded-l-[10px] items-center border-r-[1px] border-gray-400'>
                                <CiSearch />
                            </div>
                            <input type='search' className='h-[40px] w-[90%]  bg-gray-200 rounded-r-[10px] focus:outline-none' />
                        </div>
                        <button
                            className="flex items-center bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
                            onClick={showAdd} 
                        >
                            <FaPlus className="mr-2 w-4 h-4" /> Add Student
                        </button>
                    </div>
                    <div className='flex flex-col w-[100%] shadow-lg border-lg border-gray-200 h-[80vh] rounded-[10px]'>
                        <div className='w-[100%] h-[10vh] flex justify-between items-center px-[20px] border-gray-200 border-b-[3px] rounded-t-[10px] bg-gradient-to-r from-[#676ea1] to-[#2B39A0]'>
                            <p className='text-[1.2rem] text-white font-semibold'>Name</p>
                            <p className='text-[1.2rem] text-white font-semibold'>Email</p>
                            <p className='w-[10vw]'></p>


                        </div>
                        <div className='w-[100%] flex flex-col overflow-y-auto'>
                            <StudentAdminItems
                                name='Yousef'
                                studentEmail='yohejazi@gmail.com'
                                DeleteStudentFN={()=>{DeleteStudentFN()}}
                                viewIdeasFN={() => showIdeasFN('5')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admin;
