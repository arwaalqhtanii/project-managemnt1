import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

function Admin() {
    return (
        <div className="container flex flex-col mx-auto gap-y-[1.5rem]">
            <div className='header w-[100vw] h-[15vh] bg-gray-600'>
                <div></div>
                
            </div>

            <div className='flex flex-col items-center gap-y-[1.5rem]'>
                <div className='w-[100vw] flex justify-center'>
                    <input className='h-[40px] w-[50%] rounded-[5px] bg-gray-200' type='search'></input>

                </div>

                <div className='w-[100vw] h-[70vh] flex  justify-evenly'>
                    {/*student list div */}
                    <div className='w-[20vw] h-[100%] flex flex-col bg-gray-300  rounded-[5px]'>
                        <h1>Students</h1>
                        <div className='w-[100%] flex flex-col'>
                            <div className='w-[100%] h-[10vh] flex justify-between items-center border-[2px] border-gray-400 box-border shadow-xl bg-gray-100 px-[10px]'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-blue-500'></FaRegUserCircle>
                                <p className='justify-start'>mohammed</p>
                                <button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>
                        </div>
                    </div>

                    {/*ideas  div */}
                    <div className='w-[70vw] h-[100%] flex p-[10px] bg-gray-300  rounded-[5px] justify-between'>
                        {/*ideas list div */}
                        <div className='w-[25%] flex flex-col bg-white rounded-[5px] p-[10px]'>
                            <h1>Ideas</h1>
                            <div className='w-[100%] flex flex-col items-center'>

                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px]'>
                                    <p>title</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>
                            </div>
                        </div>
                        {/*ideas details div */}
                        <div className='w-[70%] flex flex-col bg-white rounded-[5px] p-[10px]'>
                            <div className='flex justify-end'>
                                <ul className='flex gap-x-[0.5rem]'>
                                    <li><button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Delete</button></li>
                                    <li><button className='bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Edite</button></li>
                                    <li><button className='bg-blue-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Save</button></li>
                                </ul>
                            </div>
                            <div className='w-[70%] '>
                                <p>Title</p>
                                <p className='w-[100%] h-[40px] rounded-[5px] bg-slate-200'>project name</p>
                            </div>
                            <div className='flex h-[70%] w-[100%] gap-x-[2rem]'>
                                <div className='w-[70%]'>
                                    <h1>Description</h1>
                                    <div className='w-[100%] h-[100%] bg-gray-200 rounded-[5px] '>

                                    </div>
                                </div>

                                <div className='w-[30%]'>
                                    <h1>Details</h1>
                                    <div className='w-[100%] h-[100%] bg-gray-200 rounded-[5px]  '>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Admin
