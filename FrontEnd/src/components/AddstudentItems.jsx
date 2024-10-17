import React from 'react';

function AddstudentItems(props) {
    return (
        <div className='w-full h-fit flex flex-col justify-between items-center px-[20px] border-b-[2px] border-gray-200 hover:bg-gray-100'>
            <div className='flex w-full justify-between items-center py-[10px]'>
                <p className='hidden md:block'>{props.name}</p>
                <p className='text-sm'>{props.studentEmail}</p>
                <button
                    className='h-10 px-4 rounded-md bg-gradient-to-r from-[#4B6DAB] to-[#2B39A0] text-white font-semibold shadow-md transition duration-300 transform hover:scale-105'
                    onClick={props.addstudentFN}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default AddstudentItems;
