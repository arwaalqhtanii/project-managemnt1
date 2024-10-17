import React from 'react';
import { CiSearch } from "react-icons/ci";
import AddstudentItems from './AddstudentItems';

function Addstudent(props) {
    return (
        <div className="relative">

            {/* خلفية مظلمة */}
            <div className='h-full w-full bg-black opacity-70 fixed top-0 left-0 z-[999]'></div>

            {/* نافذة البوبوب */}
            <div className='w-full sm:w-[90vw] md:w-[60vw] lg:w-[40vw] h-[80vh] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center gap-y-4 rounded-lg bg-white shadow-lg z-[1000] overflow-hidden'>
                <div className='w-full flex justify-between p-5'>
                    <p className='font-bold text-xl text-[#091057] border-b-4 border-[#2B39A0] pb-2'>Add Students</p>
                    <button className='bg-red-500 text-white rounded-lg px-3 py-1' onClick={props.hidePopFN}>Close</button>
                </div>

                {/* شريط البحث */}
                <div className='w-full flex justify-center mb-4'>
                    <div className='flex items-center w-full'>
                        <div className='h-10 flex justify-center items-center rounded-l-md bg-gray-200 px-3'>
                            <CiSearch className='text-2xl' />
                        </div>
                        <input 
                            className='w-full h-10 rounded-r-md bg-gray-200 shadow-lg px-4 focus:outline-none' 
                            placeholder='Search by name' 
                            type='search' 
                        />
                    </div>
                </div>

                {/* قائمة الطلاب */}
                <div className='w-full flex flex-col items-center overflow-y-auto gap-y-2 pb-4'>
                    <AddstudentItems
                        name='Yousef'
                        studentEmail='yohejazi@gmail.com'
                        viewIdeasFN={() => ('5')}
                    />
                    <AddstudentItems
                        name='Khaled'
                        studentEmail='khaled@example.com'
                        viewIdeasFN={() => ('5')}
                    />
                    <AddstudentItems
                        name='Ahmad'
                        studentEmail='ahmad@example.com'
                        viewIdeasFN={() => ('5')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Addstudent;

