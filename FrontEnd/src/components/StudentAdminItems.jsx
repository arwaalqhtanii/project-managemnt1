import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function StudentAdminItems(props) {
    return (
        <div className='w-[100%] h-[10vh] flex justify-between items-center px-[20px] border-b-[2px] border-gray-200 hover:bg-blue-50 transition duration-300'>
            <p className='text-[1.2rem]  font-semibold'>{props.name}</p>
            <p> {props.studentEmail}</p>
            <div className='flex max-md:flex-col-reverse max-md:gap-y-[0.5rem] gap-x-[0.5rem]'>
            <button
                className='h-[40px] px-[10px] rounded-[10px] bg-red-600 text-white font-semibold'
                onClick={props.DeleteStudentFN}
            >
                <MdDelete></MdDelete>
            </button>
            <button
                className='h-[40px] px-[10px] rounded-[10px] bg-blue-600 text-white font-semibold'
                onClick={props.viewIdeasFN}
            >
            <FaEye></FaEye>
            </button>
            </div>

        </div>
    );
}

export default StudentAdminItems;