// import React from 'react'

// function AddstudentItems(props) {
//   return (
//     <div className='w-[100%] h-[10vh] flex justify-between items-center px-[20px] border-b-[2px] border-gray-200'>
//     <p>{props.name}</p>
//     <p>{props.ideasNum}</p>
//     <button
//         className='h-[40px] px-[10px] rounded-[10px] bg-blue-600 text-white font-semibold'
//         onClick={props.addstudentFN}
//     >
//         ADD
//     </button>
// </div>
//   )
// }

// export default AddstudentItems


function AddstudentItems(props) {
<<<<<<< HEAD
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
=======
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
                  onClick={props.addstudentFN} // تفعيل دالة الإضافة عند النقر
              >
                  ADD
              </button>
          </div>
      </div>
  );
<<<<<<< HEAD
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
=======
>>>>>>> 6e36054463a49de33d2bd572f2f60f1724cc2acb
}

export default AddstudentItems;
