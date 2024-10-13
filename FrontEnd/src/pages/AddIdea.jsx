import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import idea from '../assets/idea.jpg';
import Footer from '../components/Footer';

function AddIdea() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ projectName, description });
    setProjectName('');
    setDescription('');
    toast.success('Your project idea has been submitted successfully!'); // Toast message
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-xl font-bold">Project Management</h1>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-h-screen md:flex-row items-center justify-center p-4">
        <div className="bg-slate-100 w-full max-w-lg shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add Your Project</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Project Name</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-100"
                placeholder="Enter project name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-100"
                rows="4"
                placeholder="Describe your project idea"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold shadow-lg transform hover:scale-105"
            >
              Submit Project
            </button>

            <p className="mt-4 text-center text-gray-600 text-sm">
              We can't wait to see your amazing ideas! Your contribution helps us grow.
            </p>
          </form>
        </div>
        
        {/* Image on the right */}
        <div className="hidden md:block w-full max-w-md  lg:ml-20">
          <img 
            src={idea} 
            alt="Project Idea" 
            className="rounded-full shadow-lg" 
          />
        </div>
      </div>

      {/* Footer */}
      <Footer/>
      {/* <footer className="w-full bg-blue-600 p-4 text-white text-center mt-4">
        <p>&copy; 2024 My Project Management</p>
      </footer> */}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default AddIdea;
