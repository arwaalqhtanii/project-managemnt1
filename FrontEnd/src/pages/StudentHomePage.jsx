import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function StudentHomePage() {
  return (

    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 font-sans">

     
      <section className="relative bg-[#2b39a0] text-white py-24 px-12 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome Waleed Alhrbi</h1>
          <p className="text-xl mb-8">
            Welcome to the Graduation Project Management System. Here, you can manage and track your submitted projects.
          </p>
          <a href="#stats" className="bg-white text-[#2b39a0] py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">Explore Your Projects</a>
        </div>

         
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-0 left-20 w-28 h-28 bg-white opacity-20 rounded-full"></div>
      </section>

   
      <section id="stats" className="bg-white py-16 px-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Your Project Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#4A90E2">
                <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/>
              </svg>
              <p className="text-4xl font-bold mt-6 text-gray-800">5</p>
              <p className="text-gray-600 mt-2 text-center">Projects Submitted</p>
            </div>

          
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#F5A623">
                <path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/>
              </svg>
              <p className="text-4xl font-bold mt-6 text-gray-800">2</p>
              <p className="text-gray-600 mt-2 text-center">Pending Projects</p>
            </div>

           
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#7ED321">
                <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
              </svg>
              <p className="text-4xl font-bold mt-6 text-gray-800">3</p>
              <p className="text-gray-600 mt-2 text-center">Accepted Projects</p>
            </div>

             
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#D0021B">
                <path d="M240-800v200-200 640-9.5 9.5-640Zm0 720q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v174q-19-7-39-10.5t-41-3.5v-120H520v-200H240v640h254q8 23 20 43t28 37H240Zm396-20-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z"/>
              </svg>
              <p className="text-4xl font-bold mt-6 text-gray-800">1</p>
              <p className="text-gray-600 mt-2 text-center">Rejected Projects</p>
            </div>

          </div>
        </div>
      </section>

     
      <section className="bg-[#f5f5f5] py-16 px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Graduation Project Management System is designed to assist students in submitting and tracking their project ideas, providing a streamlined and efficient way to manage academic projects.
          </p>
        </div>
      </section>
      
      <Footer/>
    </div>
    </>
  );
}

export default StudentHomePage;
