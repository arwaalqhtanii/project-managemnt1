import { CiSearch } from "react-icons/ci";
import StudentIdeaItems from '../components/StudentIdeaItems';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function StudentIdeas() {
    function DeleteIdeaFN() {
        // Logic to delete idea
    }

    function ShowDetailsFN() {
        // Logic to show details
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <Navbar />
            <main className="flex-1 flex justify-center items-center pt-8 ">
                <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <header className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white p-6 flex flex-col items-center">
                        <h2 className="text-4xl font-bold">Student Ideas</h2>
                        <div className="mt-4 w-full max-w-md">
                            <div className="relative">
                                <CiSearch className="absolute left-3 top-2 text-gray-400" />
                                <input
                                    type="search"
                                    className="h-12 w-full bg-gray-200 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        {/* Left Side for Ideas List */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full overflow-auto">
                            <h3 className="font-semibold text-lg mb-4">Ideas List</h3>
                            <div className="space-y-4">
                                <StudentIdeaItems
                                    number='1'
                                    title="Project 1"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='pending'
                                />
                                <StudentIdeaItems
                                    number='2'
                                    title="Project 2"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='rejected'
                                />
                                <StudentIdeaItems
                                    number='3'
                                    title="Project 3"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='pending'
                                />
                                <StudentIdeaItems
                                    number='4'
                                    title="Project 4"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'
                                />
                                <StudentIdeaItems
                                    number='5'
                                    title="Project 5"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'
                                />
                                <StudentIdeaItems
                                    number='6'
                                    title="Project 6"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'
                                />
                                <StudentIdeaItems
                                    number='7'
                                    title="Project 7"
                                    deleteFN={DeleteIdeaFN}
                                    showDetailsFN={ShowDetailsFN}
                                    status='approved'
                                />
                            </div>
                        </div>

                        {/* Right Side for Idea Details */}
                        <div className="bg-gray-50 rounded-lg p-4 shadow-md h-full">
                            <h3 className="font-semibold text-lg mb-4">Idea Details</h3>
                            <div className="mb-4">
                                <label className="font-semibold">Title</label>
                                <input
                                    type="text"
                                    className="h-12 w-full bg-white rounded-lg border border-gray-300 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    defaultValue="Project Title"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-semibold">Description</label>
                                <textarea
                                    className="min-h-[35vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    placeholder="Enter description..."
                                />
                            </div>
                            <div className="flex gap-3 mb-4">
                                <button className="h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 font-semibold shadow-md">
                                    Approved
                                </button>
                                <button className="h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-6 font-semibold shadow-md">
                                    Rejected
                                </button>
                                <button className="h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 font-semibold shadow-md">
                                    Delete
                                </button>
                            </div>
                            <div>
                                <label className="font-semibold">Comment</label>
                                <textarea
                                    className="min-h-[25vh] bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full mt-2 rounded-lg"
                                    placeholder="Add your comments..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default StudentIdeas;
