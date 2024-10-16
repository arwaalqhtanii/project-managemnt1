import React from 'react'

function AddstudentItems(props) {
    return (
        <div className='w-[100%] h-[fit-content]  flex flex-col justify-between items-center px-[20px] border-b-[2px] border-gray-200 hover:bg-gray-100'>
            <div className='flex w-[100%] justify-between items-center py-[10px] border-b-[1px] border-gray-500 pb-2'>
                <p className='font-semibold'>Name</p>
                <p className='font-semibold'>Email</p>
                <p className='w-[50px]'></p>
            </div>
            <div className='flex w-[100%] justify-between items-center py-[10px]'>
                <p>{props.name}</p>
                <p>{props.studentEmail}</p>
                <button
                    className='h-[30px] px-[10px] rounded-[10px] bg-blue-600 text-white font-semibold'
                    onClick={props.addstudentFN}
                >
                    ADD
                </button>
            </div>

        </div>
    )
}

export default AddstudentItems
