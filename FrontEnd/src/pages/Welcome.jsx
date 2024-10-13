
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700 text-white p-4">
      
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 top-[-100px] left-[-100px]"></div>
        <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-20 top-[100px] right-[-80px]"></div>
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full opacity-25 bottom-[-150px] left-[-50px]"></div>
        <div className="absolute w-60 h-90 bg-blue-900 rounded-full opacity-25 bottom-[-100px] righ-[-50px]"></div>
      </div>


      <div className="text-center relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Graduation Project Management</h1>
        <p className="text-lg md:text-xl mb-6">
          Manage and track your graduation projects with ease. Streamline your project workflow and collaborate efficiently.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Whether you're an admin or a student, our platform helps you stay organized and focused on success.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="bg-white text-blue-700 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition duration-300 hover:bg-blue-100">
              Log In to Your Account
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition duration-300 hover:bg-blue-600">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
   
    </div>

  );
};

export default WelcomePage;

