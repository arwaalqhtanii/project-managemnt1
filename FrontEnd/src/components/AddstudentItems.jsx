import React from 'react'

function AddstudentItems(props) {
  return (
    <div className='w-[100%] h-[10vh] flex justify-between items-center px-[20px] border-b-[2px] border-gray-200'>
    <p>{props.name}</p>
    <p>{props.ideasNum}</p>
    <button
        className='h-[40px] px-[10px] rounded-[10px] bg-blue-600 text-white font-semibold'
        onClick={props.addstudentFN}
    >
        ADD
    </button>
</div>
  )
}

export default AddstudentItems

