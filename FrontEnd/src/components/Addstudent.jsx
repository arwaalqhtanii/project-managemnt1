
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import AddstudentItems from './AddstudentItems';

function Addstudent(props) {
    const [searchTerm, setSearchTerm] = useState('');

    // تنظيف شريط البحث
    const clearSearch = () => {
        setSearchTerm('');
    };

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
                    <div className='relative w-full flex items-center'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <CiSearch className="text-2xl text-gray-500" />
                        </div>
                        <input
                            type='search'
                            className='block w-full pl-10 pr-6 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            placeholder="Search by name"
                            value={searchTerm}
                            autoComplete="off"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <AiOutlineClose
                                    className="text-gray-500 cursor-pointer"
                                    onClick={clearSearch}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* قائمة الطلاب */}
                <div className='w-full flex flex-col items-center overflow-y-auto gap-y-2 pb-4'>
                    {searchTerm === '' || 'Yousef'.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <AddstudentItems
                            name='Yousef'
                            studentEmail='yohejazi@gmail.com'
                            viewIdeasFN={() => ('5')}
                        />
                    ) : null}
                    {searchTerm === '' || 'Khaled'.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <AddstudentItems
                            name='Khaled'
                            studentEmail='khaled@example.com'
                            viewIdeasFN={() => ('5')}
                        />
                    ) : null}
                    {searchTerm === '' || 'Ahmad'.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <AddstudentItems
                            name='Ahmad'
                            studentEmail='ahmad@example.com'
                            viewIdeasFN={() => ('5')}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Addstudent;
