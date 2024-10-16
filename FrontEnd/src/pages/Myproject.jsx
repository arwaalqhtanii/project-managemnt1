import React, { useState,useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';


function Myproject() {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('Token'); // Replace with the actual token

  useEffect(() => {
      const fetchProjects = async () => {
          try {
              const response = await axios.get('http://localhost:5040/projects/my-projects', {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              });
              console.log(response.data.projects);
              
              setProjects(response.data.projects); // Assuming the response contains a 'projects' array
         
            } catch (error) {
              console.error("Error fetching projects:", error);
          }
      };

      fetchProjects();
  }, []);



  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 4;

 

  const totalPages = Math.ceil(projects.length / rowsPerPage);
  const currentRows = projects.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-500 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      case 'waiting':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-300 text-black';
    }
  };

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAllIdeasClick = () => {
    navigate('/addidea'); // Navigate to the all ideas page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
  
      <div className="flex-grow flex min-h-screen flex-col items-center justify-center p-4 max-sm:p-1">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 max-sm:p-3 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl max-sm:text-xl font-bold text-black border-b-4 border-[#2B39A0] pb-2">
              My Projects Overview
            </h2>
            <button
  onClick={handleAllIdeasClick}
  className="flex items-center bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
>
  <FaPlus className="mr-2 w-4 h-4" />
  <span className="font-medium text-base">Add Ideas</span>
</button>
          </div>

          <div className="overflow-x-auto w-full rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#676ea1] to-[#2B39A0] text-white">
                  <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold max-sm:p-3">Project Name</th>
                  <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold md:table-cell max-sm:hidden">Project Description</th>
                  <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold md:table-cell max-sm:hidden">Status</th>
                  <th className="p-4 text-center border-b-2 border-gray-300 text-lg font-semibold">Comments</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((project, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition duration-300">
                    <td className="hidden md:table-cell p-4 text-center border-b border-gray-200 text-gray-800">
                      {project.title}
                    </td>

                    {/* Responsive View for Mobile */}
                    <td className="block md:hidden p-4 text-center border-b border-gray-200 text-gray-800">
                      <div className="flex flex-col h-full justify-between">
                        <div className="text-sm text-gray-600">{project.title}</div>
                        <div className="text-sm font-semibold mt-1">
                          <div className={`py-1 mt-2 px-3 rounded-full ${getStatusClass(project.status)}`}>
                            {project.status}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="hidden md:table-cell p-4 text-center border-b border-gray-200 text-gray-800">{project.description}</td>

                    <td className="hidden md:table-cell p-4 text-center border-b border-gray-200">
                      <span className={`py-1 px-3 rounded-full ${getStatusClass(project.status)}`}>
                        {project.status}
                      </span>
                    </td>

                    <td className="p-4 max-sm:p-1 text-center border-b border-gray-200 text-gray-800">
                      <div className="bg-gray-100 p-2 rounded-lg text-gray-700 h-full">
                        {project.comments }
                      </div>
                    </td>
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
              onClick={() => setCurrentPage(prev => (prev + 1 < totalPages ? prev + 1 : prev))}
              className={`flex items-center p-2 rounded-full ${currentPage + 1 >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2B39A0] text-white hover:bg-[#444c8a]'}`}
              disabled={currentPage + 1 >= totalPages}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    
    </div>
  );
}

export default Myproject;
