import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
function Admin() {
    const navigate = useNavigate()
    const [addPopStatus, setAddStatus] = useState();

    function showAdd() {
        setAddStatus(true)
    }

    function hideAdd() {
        setAddStatus(false)
    }

    function logout() {
        sessionStorage.clear
        navigate('/login')
    }
    return (
        <div className="container flex flex-col mx-auto gap-y-[1.5rem] relative">
            {addPopStatus && (
                <>
                    <div className='h-[100vh] w-[100vw] bg-black opacity-70 absolute z-[888]'></div>
                    <div className='w-[40vw] h-[80vh] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] absolute flex flex-col items-center gap-y-[0.5rem] rounded-[15px] bg-gray-300'>
                        <div className='w-[100%] flex justify-between p-[20px]'>
                            <p className='font-bold text-[1.2rem] text-[#091057] '>Add Students</p>
                            <button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { hideAdd() }}>Close</button>
                        </div>
                        <div className='w-[100%] flex justify-center'>
                            <div className='h-[40px] flex justify-center items-center w-[5%] rounded-l-[5px] bg-gray-200'>
                                <CiSearch className='text-[1.5rem]'></CiSearch>
                            </div>
                            <input className='w-[75%] h-[40px] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none' placeholder='Search by name' type='search'></input>

                        </div>
                        <div className='w-[100%] flex flex-col items-center overflow-y-scroll gap-y-[0.5rem] pb-[20px]'>
                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>yousef</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>waleed</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>arwa</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>hanen</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>fahad</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>faraj</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>

                            <div className='w-[80%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] rounded-[5px] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>mohammed</p>
                                <input className='h-[20px] w-[20px] ml-auto' type='checkbox'></input>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className='header w-[100vw] h-[15vh] bg-[#024CAA] flex items-center px-[20px] border-b-[5px] border-[#EC8305] relative'>
                <div className='flex justify-center items-center absolute top-[50%] left-[5%] bg-[#EC8305] shadow-xl h-[100px] w-[100px] rounded-[10px]'>
                    <FaRegUserCircle className='w-[80px] h-[80px] text-[#091057]'></FaRegUserCircle>
                </div>
                <button className='ml-auto bg-red-500  text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => {logout() }}>Log out</button>
            </div>

            <div className='flex flex-col items-center gap-y-[1.5rem]'>
                <div className='w-[100vw] flex justify-center items-center'>
                    <div className='h-[40px] flex justify-center items-center w-[5%] rounded-l-[5px] bg-gray-200'>
                        <CiSearch className='text-[1.5rem]'></CiSearch>
                    </div>
                    <input className='h-[40px] w-[55%] rounded-r-[5px] bg-gray-200 shadow-lg px-[1rem] focus:outline-none' type='search'></input>

                </div>

                <div className='w-[100vw] h-[70vh] flex  justify-evenly'>
                    {/*student list div */}
                    <div className='w-[20vw] h-[100%] flex flex-col bg-gray-300 gap-y-[5px]  rounded-[5px] py-[15px]'>
                        <div className='flex justify-between items-center px-[10px]'>
                            <h1 className='font-bold text-[1.2rem] text-[#091057] '>Students</h1>
                            <button className='bg-[#024CAA] text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { showAdd() }}>Add +</button>
                        </div>
                        <div className='w-[100%] flex flex-col gap-y-[0.5rem] overflow-y-scroll '>
                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>mohammed</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>

                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>arwa</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>


                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>waleed</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>


                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>hanen</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>


                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>omar</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>


                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>salem</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>



                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>yousef</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>



                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>abdul allah</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>



                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>faraj</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>



                            <div className='w-[100%] h-[10vh] flex items-center shadow-xl bg-gray-200 px-[10px] gap-x-[1rem] flex-shrink-0'>
                                <FaRegUserCircle className='w-[50px] h-[50px] text-[#024CAA]'></FaRegUserCircle>
                                <p className=' font-bold text-[1.1rem] text-[#024CAA]'>thafir</p>
                                <button className='ml-auto bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]'>Delete</button>
                            </div>


                        </div>
                    </div>

                    {/*ideas  div */}
                    <div className='w-[70vw] h-[100%] flex p-[10px] bg-gray-300  rounded-[5px] justify-between'>
                        {/*ideas list div */}
                        <div className='w-[25%] flex flex-col bg-white rounded-[5px] p-[10px]'>
                            <h1 className='font-bold text-[1.2rem] text-[#091057]'>Ideas</h1>
                            <div className='w-[100%] flex flex-col gap-y-[0.5rem] items-center overflow-y-scroll '>

                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project one</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>

                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project two</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>


                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project three</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>


                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project fouur</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>


                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project five</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>

                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project five</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>

                                <div className='w-[100%] h-[10vh] flex items-center justify-between bg-gray-200 rounded-[15px] px-[10px] shadow-lg flex-shrink-0'>
                                    <p className=' font-bold text-[1.2rem] text-[#024CAA]'>project five</p>
                                    <button className='h-[fit-content] bg-orange-500 text-white rounded-[15px] px-[10px] py-[5px]'>Status</button>
                                </div>
                            </div>
                        </div>
                        {/*ideas details div */}
                        <div className='w-[70%] flex flex-col justify-between bg-white rounded-[5px] p-[10px]'>
                            <div className='flex justify-end'>
                                <ul className='flex gap-x-[0.5rem]'>
                                    <li><button className='bg-red-500 text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Delete</button></li>
                                    <li><button className='bg-[#EC8305] text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Edite</button></li>
                                    <li><button className='bg-[#024CAA] text-white rounded-[15px] px-[10px] py-[5px]' onClick={() => { }}>Save</button></li>
                                </ul>
                            </div>
                            <div className='w-[70%] flex flex-col gap-y-[5px] '>
                                <p className='font-bold text-[1.2rem] text-[#091057]'>Title</p>
                                <p className='w-[95%] h-[40px] rounded-[5px] content-center px-[10px] font-bold text-[1rem] text-[#024CAA] bg-slate-200'>project name</p>
                            </div>
                            <div className='flex h-[70%] w-[100%] gap-x-[2rem]'>
                                <div className='w-[70%] flex flex-col gap-y-[5px] '>
                                    <h1 className='font-bold text-[1.2rem] text-[#091057]'>Description</h1>
                                    <div className='w-[100%] h-[100%] bg-gray-200 rounded-[5px] '>

                                    </div>
                                </div>

                                <div className='w-[30%] flex flex-col gap-y-[5px]'>
                                    <h1 className='font-bold text-[1.2rem] text-[#091057]'>Comments</h1>
                                    <div className='w-[100%] h-[100%] bg-gray-200 rounded-[5px]  '>
                                        <textarea className='w-[100%] h-[100%] bg-transparent p-[10px]'></textarea>

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
