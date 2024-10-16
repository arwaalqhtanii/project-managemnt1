
import { CiSearch } from "react-icons/ci";

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
                        <div className="w-full flex justify-between  mb-4">
                            <h2 className="text-3xl font-bold text-black border-b-4 border-[#2B39A0] pb-2 text-left">
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
                    <div className='flex flex-col  w-[100%] border-[1px] bg-white shadow-lg rounded-lg h-[70vh] max-md:h-[100%] '>

                        <div className='w-[100%] flex items-center h-[10vh] px-[20px] border-gray-200 border-b-[3px] rounded-t-[10px] bg-gradient-to-r from-[#676ea1] to-[#2B39A0]'>
                            <p className='text-white font-semibold text-[1.2rem]'>Student name : {'yousef'}</p>

                        </div>
                        <div className='w-[100%] h-[60vh] flex max-md:h-[100%] max-md:flex-col'>

                            <div className='w-[35%] max-md:w-[100%] max-md:h-[50%] h-[60vh] flex flex-col border-[1px]  rounded-bl-[10px]  overflow-y-scroll '>

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
                            <div className='w-[65%] p-[20px] max-md:w-[100%] max-md:flex-col  h-[50vh] flex justify-between   rounded-br-[10px]'>

                                <div className='flex max-md:w-[100%] flex-col gap-y-[0.3rem] w-[70%]'>
                                    <div>
                                    <p className='font-semibold'>Title</p>
                                    <p className='h-[40px] bg-gray-100 rounded-lg px-[10px] flex items-center'>{'project title'}</p>
                                    <p className='font-semibold'>Description</p>
                                    <textarea className='min-h-[35vh] max-md:w-[100%] bg-gray-100 p-[10px] focus:outline-none rounded-lg'>

                                    </textarea>
                                    </div>

                                    <div className='flex max-md:flex-col max-md:gap-y-[0.5rem] gap-x-[0.5rem]'>
                                        <button className='h-[30px] bg-green-300 hover:bg-green-500 rounded-lg px-[23px] font-semibold'>Approved</button>
                                        <button className='h-[30px] bg-yellow-300 hover:bg-yellow-500 rounded-lg px-[23px] font-semibold'>Rejected</button>
                                        <button className='h-[30px] bg-red-300 hover:bg-red-500 rounded-lg px-[23px] font-semibold'>Delete</button>
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
