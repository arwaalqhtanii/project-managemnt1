import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import idea from '../assets/idea.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

function AddIdea() {
  const [title, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('Token');
    console.log("Token being sent:", token);

    const projectData = { title, description };
    console.log("Submitting project data:", projectData);

    try {
      const response = await axios.post(
        'http://localhost:5040/projects/addProject',
        projectData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Project submitted successfully:', response.data);
      setProjectName('');
      setDescription('');
      toast.success('Your project idea has been submitted successfully!');
    } catch (error) {
      console.error('Error submitting your project:', error);

      if (error.response) {
        const { status, data } = error.response;
        toast.error(`Error ${status}: ${data.message || 'Something went wrong'}`);
      } else if (error.request) {
        toast.error('No response received from the server.');
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-h-screen md:flex-row items-center justify-center p-4">
        <div className="bg-slate-100 w-full max-w-lg shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add Your Project</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Project Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setProjectName(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter project name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                rows="4"
                placeholder="Describe your project idea"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B39A0] text-white p-3 rounded-md hover:bg-gray-700 transition duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              Submit Project
            </button>

            <p className="mt-4 text-center text-gray-600 text-sm">
              We can't wait to see your amazing ideas! Your contribution helps us grow.
            </p>
          </form>
        </div>

        {/* Image on the right */}
        <div className="hidden md:block w-full max-w-md lg:ml-20">
          <img 
            src={idea} 
            alt="Project Idea" 
            className="rounded-full shadow-lg" 
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default AddIdea;
