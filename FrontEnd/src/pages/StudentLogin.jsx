import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
        setErrorMessage('Both email and password are required.');
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
    const userData = { email, password };
    let endpoint;

    if (userType === 'student') {
        endpoint = 'http://localhost:5040/users/login/student';
    } else {
        endpoint = 'http://localhost:5040/users/login/admin'; // Fixed double slash
    }

    console.log('User data:', userData);
    console.log('Endpoint:', endpoint);

    try {
        const response = await axios.post(endpoint, userData);
        if (response.status === 200) {
            const loggedInUser = response.data.user; // Assuming the response contains user info
            console.log(response.data);
            localStorage.setItem('Username', loggedInUser.username);
            localStorage.setItem('Token', response.data.token);

            if (loggedInUser.userType === 'student') {
                navigate('/studentHome');
            } else {
                navigate('/adminhome');
            }
        }
    } catch (error) {
        console.error('Error:', error.response || error.message);
        if (error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage('There was an error logging in. Please try again later.');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Example@example.com"
              value={email}
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <small className='text-gray-500 ml-2'>Your password should be at least 5 characters.</small>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition duration-300 mt-4">
            Sign in
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
