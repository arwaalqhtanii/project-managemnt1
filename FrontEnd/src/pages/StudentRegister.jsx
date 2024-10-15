import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateUsername = (username) => {
    const regex = /^(?=.*[A-Z]).+$/; // At least one uppercase letter
    return regex.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');

    // Validate inputs
    if (!name || !email || !password) {
        setErrorMessage('All fields are required.');
        return;
    }

    if (!validateUsername(name)) {
        setErrorMessage('Username must contain at least one uppercase letter.');
        return;
    }

    if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
    }

    if (password.length <= 5) {
        setErrorMessage('Password must be more than 5 characters long.');
        return;
    }

    const userType = email.endsWith('@tuwaiq.com') ? 'student' : 'admin';

    const userData = {
        username: name,
        email,
        password,
    };

    try {
        let endpoint;
        if (userType === 'student') {
            endpoint = 'http://localhost:5040/users/register/student';
        } else {
            endpoint = 'http://localhost:5040/users/register/admin';
        }

        const response = await axios.post(endpoint, userData);
        if (response.status === 201) {
            // alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} account created successfully!`);
            navigate('/login'); // Adjust this to your desired route
        }
    } catch (error) {
        console.error('Error:', error);
        // Check if error response exists and contains a message
        if (error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage('There was an error creating the account. Please try again later.');
        }
    }
};


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700 text-white p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 top-[-100px] left-[-100px]"></div>
        <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-20 top-[100px] right-[-80px]"></div>
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full opacity-25 bottom-[-150px] left-[-50px]"></div>
      </div>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">User Name</label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <small className='text-[gray] ml-2'>The Username should contian one Capital Letter!</small>
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          <small className='text-[gray] ml-2'>When you are Students email contian @tuwaiq.com</small>

          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          <small className='text-[gray] ml-2'>Password more than 5 characters.</small>

          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition duration-300 mt-6">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
