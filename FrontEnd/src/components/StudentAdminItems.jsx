import React from 'react';

function StudentAdminItems(props) {
    return (
        <div className='w-[100%] h-[10vh] flex justify-between items-center px-[20px] border-b-[2px] border-gray-200 hover:bg-blue-50 transition duration-300'>
            <p className='text-[1.2rem]  font-semibold'>{props.name}</p>
            <p> Ideas Number : {props.ideasNum}</p>
            <button
                className='h-[40px] px-[10px] rounded-[10px] bg-blue-600 text-white font-semibold'
                onClick={props.viewIdeasFN}
            >
                View Ideas
            </button>
        </div>
    );
}

export default StudentAdminItems;