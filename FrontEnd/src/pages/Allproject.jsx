import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Allproject() {
  const [projects, setProjects] = useState([]);
    const token = localStorage.getItem('Token'); // Replace with the actual token

    useEffect(() => {
        const fetchAcceptedProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5040/projects/projects/accepted', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProjects(response.data); // Assuming response data contains projects
            } catch (error) {
                console.error("Error fetching accepted projects:", error);
            }
        };

        fetchAcceptedProjects();
    }, []);



  
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 4;

  const start = currentPage * rowsPerPage;
  const currentRows = projects.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(projects.length / rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
   
      <div className="flex-grow min-h-screen flex flex-col items-center justify-center p-4 max-sm:p-1">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 max-sm:p-1 flex flex-col items-center">
      <div className="w-full border-b-4 border-[#2B39A0] mb-4">
    <h2 className="text-3xl font-bold text-black pb-2 text-left">
      All Projects Accepted
    </h2>
  </div>

  <div className="overflow-hidden w-full rounded-lg shadow-lg">
    <table className="min-w-full bg-white rounded-lg">
      <thead>
        <tr className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white">
          <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Student Name</th>
          <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Project Title</th>
          <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Project Description</th>
        </tr>
      </thead>
      <tbody>
        {currentRows.map((item, index) => (
          <tr key={index} className="hover:bg-blue-50 transition duration-300">
            <td className="p-4 text-center border-b border-gray-200 text-gray-800">{item.studentName}</td>
            <td className="p-4 text-center border-b border-gray-200 text-gray-800">{item.projectTitle}</td>
            <td className="p-4 text-center border-b border-gray-200 text-gray-800">{item.projectDescription}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex items-center justify-center w-full mt-4">
    <button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
      className={`flex items-center p-2 rounded-full ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2B39A0] text-white hover:bg-[#444c8a]'}`}
      disabled={currentPage === 0}
    >
      <FaChevronLeft className="w-5 h-5" />
    </button>
    <span className="mx-4 text-lg">
      Page {currentPage + 1} of {totalPages}
    </span>
    <button
      onClick={() => setCurrentPage(prev => (prev + 1) < totalPages ? prev + 1 : prev)}
      className={`flex items-center p-2 rounded-full ${currentPage + 1 >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2B39A0] text-white hover:bg-[#444c8a]'}`}
      disabled={currentPage + 1 >= totalPages}
    >
      <FaChevronRight className="w-5 h-5" />
    </button>
  </div>
</div>

      </div>
      <Footer/>
      {/* <footer className="w-full bg-blue-600 p-4 text-white text-center mt-4">
        <p>&copy; 2024 Project Management System</p>
      </footer> */}
    </div>
  );
}

export default Allproject;
