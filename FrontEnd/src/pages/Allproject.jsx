import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Allproject() {
  const data = [
    { studentName: "Ahmad", projectTitle: "Mobile App", projectDescription: "A complete online shopping platform designed to enhance user experience, featuring a responsive layout, secure payment options, and a user-friendly interface." },
    { studentName: "Khaled", projectTitle: "Website", projectDescription: "An innovative mobile application that allows users to track their workouts, monitor progress, and set fitness goals, with integration of social features to encourage community engagement." },
    { studentName: "Yousef", projectTitle: "Tv-Module", projectDescription: "A strategic marketing initiative aimed at increasing brand awareness and engagement through targeted social media platforms, utilizing analytics to measure success and optimize outreach." },
    { studentName: "Taraq", projectTitle: "Mobile App", projectDescription: "A comprehensive dashboard developed to visualize key metrics and analytics, enabling stakeholders to make informed decisions based on real-time data insights." },
    { studentName: "Faisal", projectTitle: "Mobile App", projectDescription: "A conversational AI solution designed to improve customer service, providing instant responses to common inquiries and enhancing user satisfaction through personalized interactions." }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 4;

  const start = currentPage * rowsPerPage;
  const currentRows = data.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(data.length / rowsPerPage);

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
