import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 

function Myproject() {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 4;

  const [projects] = useState([
    { 
      name: "Mobile App Development", 
      description: "A user-friendly mobile application for online shopping, featuring a responsive design and secure payment options.", 
      status: "Accepted", 
      comments: "Excellent execution and innovative features!" 
    },
    { 
      name: "E-commerce Website", 
      description: "A complete e-commerce solution that allows users to browse products and make purchases online with ease.", 
      status: "Waiting", 
      comments: "Waiting for final feedback from the admin." 
    },
    { 
      name: "Social Media Marketing Strategy", 
      description: "A comprehensive strategy aimed at boosting online presence and engagement through targeted social media campaigns.", 
      status: "Rejected", 
      comments: "Needs more data-driven insights and measurable outcomes." 
    },
    { 
      name: "Fitness Tracking App", 
      description: "An interactive app that helps users track their workouts, monitor progress, and set fitness goals.", 
      status: "Accepted", 
      comments: "Great job on user interface and overall functionality!" 
    },
    { 
      name: "Blog Website", 
      description: "A simple yet effective blog platform allowing users to publish articles and share insights with the community.", 
      status: "Waiting", 
      comments: "Pending review for design improvements." 
    },
    { 
      name: "Project Management Tool", 
      description: "A project management application designed to streamline task allocation and progress tracking among team members.", 
      status: "Accepted", 
      comments: "Impressive tool with great user feedback!" 
    },
    { 
      name: "Event Management System", 
      description: "An integrated system for planning and managing events, including ticketing and attendee tracking.", 
      status: "Rejected", 
      comments: "Revisions needed for better user engagement." 
    },
    { 
      name: "Recipe Sharing Platform", 
      description: "A community-driven platform for sharing and discovering new recipes, with features for user ratings and comments.", 
      status: "Accepted", 
      comments: "Fantastic community features and design!" 
    },
  ]);

  const totalPages = Math.ceil(projects.length / rowsPerPage);
  const currentRows = projects.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-500 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      case 'Waiting':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-300 text-black';
    }
  };

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAllIdeasClick = () => {
    navigate('/Addidea'); // Navigate to the all ideas page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-xl font-bold">My Projects</h1>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center p-4 max-sm:p-1">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6 max-sm:p-3 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl max-sm:text-xl font-bold text-black border-b-4 border-blue-400 pb-2">
              My Projects Overview
            </h2>
            <button
  onClick={handleAllIdeasClick}
  className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md shadow hover:shadow-md transition duration-300 transform hover:-translate-y-1 focus:outline-none"
>
  <FaPlus className="mr-2 w-4 h-4" />
  <span className="font-medium text-base">Add Ideas</span>
</button>
          </div>

          <div className="overflow-x-auto w-full rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
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
                      {project.name}
                    </td>

                    {/* Responsive View for Mobile */}
                    <td className="block md:hidden p-4 text-center border-b border-gray-200 text-gray-800">
                      <div className="flex flex-col h-full justify-between">
                        <div className="text-sm text-gray-600">{project.name}</div>
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
                        {project.comments}
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
              className={`flex items-center p-2 rounded-full ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
              disabled={currentPage === 0}
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <span className="mx-4 text-lg">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => (prev + 1 < totalPages ? prev + 1 : prev))}
              className={`flex items-center p-2 rounded-full ${currentPage + 1 >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
              disabled={currentPage + 1 >= totalPages}
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <footer className="w-full bg-blue-600 p-4 text-white text-center mt-4">
        <p>&copy; 2024 My Project Management</p>
      </footer>
    </div>
  );
}

export default Myproject;
