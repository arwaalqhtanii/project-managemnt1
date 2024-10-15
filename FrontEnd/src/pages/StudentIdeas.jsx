import React from 'react'
import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import StudentIdeaItems from '../components/StudentIdeaItems';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function StudentIdeas() {

    function DeleteIdeaFN() {

    }

    function ShowDetailsFN() {

    }
    return (
        <div className="container flex flex-col mx-auto gap-y-[1.5rem] relative">
            <Navbar></Navbar>
            <div className='flex justify-center w-[100vw]'>
                <div className='w-[80vw] flex flex-col gap-y-[1rem] bg-white shadow-lg rounded-lg p-[20px]'>
                    <div className='flex justify-between items-center h-[10vh]'>
                        <div className="w-full flex justify-between border-b-4 border-[#2B39A0] mb-4">
                            <h2 className="text-3xl font-bold text-black pb-2 text-left">
                                Student Ideas
                            </h2>
                            <div className='flex w-[50%] justify-center items-center'>
                                <div className='h-[40px] w-[fit-content] px-[23px] flex justify-center bg-gray-200 rounded-l-[10px] items-center border-r-[1px] border-gray-400'>
                                    <CiSearch></CiSearch>
                                </div>
                                <input type='search' className='h-[40px] w-[90%] bg-gray-200 rounded-r-[10px] focus:outline-none'></input>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col  w-[100%] border-[1px] bg-white shadow-lg rounded-lg h-[70vh] '>

                        <div className='w-[100%] flex items-center h-[10vh] px-[20px] border-gray-200 border-b-[3px] rounded-t-[10px] bg-gradient-to-r from-[#676ea1] to-[#2B39A0]'>
                            <p className='text-white font-semibold text-[1.2rem]'>Student name : {'yousef'}</p>

                        </div>
                        <div className='w-[100%] h-[60vh] flex'>

                            <div className='w-[35%] h-[60vh] flex flex-col border-[1px]  rounded-bl-[10px]  overflow-y-scroll '>

                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='pending'

                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='rejected'
                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='pending'

                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'

                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'

                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'

                                ></StudentIdeaItems>
                                <StudentIdeaItems
                                    number='1'
                                    title="project name"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'

                                ></StudentIdeaItems>



                            </div>
                            <div className='w-[65%] p-[20px]  h-[60vh] flex justify-between   rounded-br-[10px]'>

                                <div className='flex flex-col gap-y-[0.3rem] w-[70%]'>
                                    <p className='font-semibold'>Title</p>
                                    <p className='h-[40px] bg-gray-100 rounded-lg px-[10px] flex items-center'>{'project title'}</p>
                                    <p className='font-semibold'>Description</p>
                                    <textarea className='min-h-[35vh] bg-gray-100 p-[10px] focus:outline-none rounded-lg'>

                                    </textarea>
                                    <div className='flex gap-x-[0.5rem]'>
                                        <button className='h-[30px] bg-gray-300 hover:bg-gray-500 rounded-lg px-[23px] font-semibold'>Edite</button>
                                        <button className='h-[30px] bg-red-300 hover:bg-red-500 rounded-lg px-[23px] font-semibold'>Delete</button>
                                        <button className='h-[30px] bg-blue-300 hover:bg-blue-500 rounded-lg px-[23px] font-semibold'>Save</button>
                                        <button className='h-[30px] bg-green-300 hover:bg-green-500 rounded-lg px-[23px] font-semibold'>Approved</button>
                                    </div>
                                </div>
                                <div className='w-[25%] flex flex-col gap-y-[0.3rem]'>
                                <p className='font-semibold'>Comment</p>
                                <textarea className='min-h-[45vh] bg-gray-100 p-[10px] focus:outline-none rounded-lg'></textarea>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default StudentIdeas
