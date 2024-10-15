import React from 'react'
import { CiSearch } from "react-icons/ci";

import AddstudentItems from './AddstudentItems'
function Addstudent(props) {
  return (
    <div>
                  
                
                    <div className='h-[100%] w-[100vw] bg-black opacity-70 absolute z-[99999999999]'></div>
                    <div className='w-[40vw] h-[80vh] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999999999999999999999] absolute flex flex-col items-center gap-y-[0.5rem] rounded-[15px] bg-gray-300'>
                        <div className='w-[100%] flex justify-between p-[20px]'>
                            <p className='font-bold text-[1.2rem] text-[#091057] '>Add Students</p>
                            <button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={props.hidePopFN}>Close</button>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='h-[40px] flex justify-center items-center w-[5%] rounded-l-[5px] bg-gray-200'>
                                <CiSearch className='text-[1.5rem]'></CiSearch>
                            </div>
                            <input className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none' placeholder='Search by name' type='search'></input>

                        </div>
                        <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>
                        <AddstudentItems
                                name='Yousef'
                                ideasNum='5'
                                viewIdeasFN={() => ('5')} // تعديل هنا
                            />
                                                        <AddstudentItems
                                name='Yousef'
                                ideasNum='5'
                                viewIdeasFN={() => ('5')} // تعديل هنا
                            />
                                                        <AddstudentItems
                                name='Yousef'
                                ideasNum='5'
                                viewIdeasFN={() => ('5')} // تعديل هنا
                            />
                        </div>
                    </div>

    </div>
  )
}

export default Addstudent
