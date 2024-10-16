// import React from 'react'
// import { CiSearch } from "react-icons/ci";

<<<<<<< HEAD
<<<<<<< HEAD
import AddstudentItems from './AddstudentItems'
function Addstudent(props) {
    return (
        <div>


=======
=======
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
// import AddstudentItems from './AddstudentItems'
// function Addstudent(props) {
//   return (
//     <div>
                  
                
//                     <div className='h-[100%] w-[100vw] bg-black opacity-70 absolute z-[99999999999]'></div>
//                     <div className='w-[40vw] h-[80vh] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999999999999999999999] absolute flex flex-col items-center gap-y-[0.5rem] rounded-[15px] bg-gray-300'>
//                         <div className='w-[100%] flex justify-between p-[20px]'>
//                             <p className='font-bold text-[1.2rem] text-[#091057] '>Add Students</p>
//                             <button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={props.hidePopFN}>Close</button>
//                         </div>
//                         <div className='w-[100%] flex justify-center'>
//                             <div className='h-[40px] flex justify-center items-center w-[5%] rounded-l-[5px] bg-gray-200'>
//                                 <CiSearch className='text-[1.5rem]'></CiSearch>
//                             </div>
//                             <input className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none' placeholder='Search by name' type='search'></input>

//                         </div>
//                         <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>
//                         <AddstudentItems
//                                 name='Yousef'
//                                 ideasNum='5'
//                                 viewIdeasFN={() => ('5')} // تعديل هنا
//                             />
//                                                         <AddstudentItems
//                                 name='Yousef'
//                                 ideasNum='5'
//                                 viewIdeasFN={() => ('5')} // تعديل هنا
//                             />
//                                                         <AddstudentItems
//                                 name='Yousef'
//                                 ideasNum='5'
//                                 viewIdeasFN={() => ('5')} // تعديل هنا
//                             />
//                         </div>
//                     </div>

//     </div>
//   )
// }

// export default Addstudent




import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import AddstudentItems from './AddstudentItems';

function Addstudent(props) {
    const [students, setStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5040/users/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);


    const filteredStudents = students?.filter((student) =>
        student.username?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
<<<<<<< HEAD
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
=======
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
            <div className='h-[100%] w-[100vw] bg-black opacity-70 absolute z-[99999999999]'></div>
            <div className='w-[40vw] h-[80vh] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-75%] z-[999999999999999999999] absolute flex flex-col items-center gap-y-[0.5rem] rounded-[15px] bg-white'>
                <div className='w-[100%] flex justify-between p-[20px]'>
                    <p className='font-bold text-[1.2rem] text-[#091057] border-b-4 border-[#2B39A0] pb-2'>Add Students</p>
                    <button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={props.hidePopFN}>Close</button>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <div className='h-[40px] flex justify-center items-center w-[5%] rounded-l-[5px] bg-gray-200'>
                        <CiSearch className='text-[1.5rem]'></CiSearch>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <input className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none' placeholder='Search by name' type='search'></input>

                </div>
                <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>
                    <AddstudentItems
                        name='Yousef'
                        studentEmail='yohejazi@gmail.com'
                        viewIdeasFN={() => ('5')}
                    />
                    <AddstudentItems
                        name='Yousef'
                        studentEmail='yohejazi@gmail.com'
                        viewIdeasFN={() => ('5')}
                    />
                    <AddstudentItems
                        name='Yousef'
                        studentEmail='yohejazi@gmail.com'
                        viewIdeasFN={() => ('5')}
                    />
                </div>
            </div>

        </div>
    )
=======
                    <input
                        className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none'
                        placeholder='Search by name'
                        type='search'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>

=======
                    <input
                        className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none'
                        placeholder='Search by name'
                        type='search'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>

>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb

                    {/* عرض الطلاب بعد الفلترة */}


                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                            <AddstudentItems
                                key={student._id}
                                name={student.username} 
                                studentEmail={student.email} 
                                addstudentFN={() => props.addStudentToAdmin(student)} 
                            />
                        ))
                    ) : (
                        <p>No matching students found.</p>
                    )}
                </div>
            </div>
        </div>
    );
<<<<<<< HEAD
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
=======
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
}

export default Addstudent;
