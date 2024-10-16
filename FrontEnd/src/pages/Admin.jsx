// import { useState } from 'react';
// import { FaRegUserCircle, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom';
// import StudentAdminItems from '../components/StudentAdminItems';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import Addstudent from '../components/Addstudent';
// function Admin() {
//     const navigate = useNavigate();
//     const [addPopStatus, setAddStatus] = useState(false);

//     // دالة لإظهار نافذة إضافة طالب
//     function showAdd() {
//         setAddStatus(true);
//     }

//     function hideAdd() {
//         setAddStatus(false);
//     }

//     function showIdeasFN(id) {
//         navigate(`/studentideas/${id}`);
//     }

//     return (
//         <div className="container flex flex-col mx-auto gap-y-[1.5rem] relative">
//             {addPopStatus && (<Addstudent
//                 hidePopFN={hideAdd}
//             ></Addstudent>)}
//             <Navbar />

//             <div className='flex justify-center w-[100vw]'>
//                 <div className='w-[60vw] flex flex-col gap-y-[1rem] border-[1px] border-black h-[80vh] rounded-[15px] p-[20px]'>
//                     <div className='flex justify-between items-center'>
//                         <h1>My Students</h1>
//                         <div className='flex w-[50%] justify-center items-center'>
//                             <div className='h-[40px] w-[fit-content] px-[23px] flex justify-center bg-gray-200 rounded-l-[10px] items-center border-r-[1px] border-gray-400'>
//                                 <CiSearch />
//                             </div>
//                             <input type='search' className='h-[40px] w-[90%] bg-gray-200 rounded-r-[10px] focus:outline-none' />
//                         </div>
//                         <button
//                             className="flex items-center bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
//                             onClick={showAdd} // إضافة حدث النقر
//                         >
//                             <FaPlus className="mr-2 w-4 h-4" /> Add Student
//                         </button>
//                     </div>
//                     <div className='flex flex-col w-[100%] border-[1px] border-black h-[80vh] rounded-[10px]'>
//                         <div className='w-[100%] h-[10vh] flex items-center px-[20px] border-gray-200 border-b-[3px] rounded-t-[10px] bg-gradient-to-r from-[#676ea1] to-[#2B39A0]'>
//                             <p className='text-[1.2rem] text-white font-semibold'>Name</p>
//                         </div>
//                         <div className='w-[100%] flex flex-col overflow-y-auto'> {/* إضافة overflow لتفعيل السكروول */}
//                             <StudentAdminItems
//                                 name='Yousef'
//                                 ideasNum='5'
//                                 viewIdeasFN={() => showIdeasFN('5')} // تعديل هنا
//                             />
//                             {/* يمكنك إضافة المزيد من العناصر هنا */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default Admin;




import { useState } from 'react';
import { FaRegUserCircle, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import StudentAdminItems from '../components/StudentAdminItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Addstudent from '../components/Addstudent';
import axios from 'axios'; 

function Admin() {
    const navigate = useNavigate();
    const [addPopStatus, setAddStatus] = useState(false);
    const [students, setStudents] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(''); 

<<<<<<< HEAD
=======
    
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
    function showAdd() {
        setAddStatus(true);
    }

    function hideAdd() {
        setAddStatus(false);
    }

   
    function addStudent(newStudent) {
        setStudents([...students, newStudent]);
    }

    
    async function deleteStudent(id) {
        try {
            await axios.delete(`http://localhost:5040/users/students/${id}`);
            setStudents(students.filter(student => student._id !== id)); 
            alert('Student deleted successfully');
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('Failed to delete student');
        }
    }

    function showIdeasFN(id) {
        navigate(`/studentideas/${id}`);
    }

<<<<<<< HEAD
    function DeleteStudentFN(){

    }
=======
  
    const filteredStudents = students.filter(student =>
        student.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb

    return (
        <div className="container flex flex-col mx-auto gap-y-[1.5rem] relative">
            {addPopStatus && (
                <Addstudent 
                    hidePopFN={hideAdd} 
                    addStudentToAdmin={addStudent} 
                />
            )}
            <Navbar />

            <div className='flex justify-center w-[100vw]'>
                <div className='w-[60vw] max-md:w-[90vw] flex flex-col gap-y-[1rem] shadow-lg h-[80vh] rounded-[15px] p-[20px]'>
                    <div className='flex max-md:flex-col max-md:gap-y-[0.5rem] justify-between items-center'>
                        <h1 className='border-b-4 border-[#2B39A0] text-3xl font-bold text-black pb-2'>My Students</h1>
                        <div className='flex w-[50%] max-md:w-[100%] justify-center items-center'>
                            <div className='h-[40px] w-[fit-content] px-[23px] flex justify-center bg-gray-200 rounded-l-[10px] items-center border-r-[1px] border-gray-400'>
                                <CiSearch />
                            </div>
<<<<<<< HEAD
                            <input type='search' className='h-[40px] w-[90%]  bg-gray-200 rounded-r-[10px] focus:outline-none' />
=======
                            <input 
                                type='search' 
                                className='h-[40px] w-[90%] bg-gray-200 rounded-r-[10px] focus:outline-none' 
                                placeholder="Search by name"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                            />
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
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
<<<<<<< HEAD


                        </div>
                        <div className='w-[100%] flex flex-col overflow-y-auto'>
                            <StudentAdminItems
                                name='Yousef'
                                studentEmail='yohejazi@gmail.com'
                                DeleteStudentFN={()=>{DeleteStudentFN()}}
                                viewIdeasFN={() => showIdeasFN('5')}
                            />
=======
                        </div>
                        <div className='w-[100%] flex flex-col overflow-y-auto'>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <StudentAdminItems
                                        key={student._id}
                                        name={student.username}
                                        studentEmail={student.email}
                                        DeleteStudentFN={() => deleteStudent(student._id)}
                                        viewIdeasFN={() => showIdeasFN(student._id)}
                                    />
                                ))
                            ) : (
                                <p className='text-center'>No students found.</p>
                            )}
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admin;

