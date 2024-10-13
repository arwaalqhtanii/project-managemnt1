import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const apiURL = 'https://66e7e6bbb17821a9d9da704c.mockapi.io/home';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(apiURL)
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
          alert('Login successful!');
          navigate('/home');
        } else {
          alert('Incorrect email or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while trying to log in.');
      });
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition duration-300">
            Sign in
          </button>
        </form>


        <div className="text-center mt-6">
          <p>Or sign in with:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
            <FaTwitter className="text-blue-400 cursor-pointer" size={24} />
            <FaGoogle className="text-red-500 cursor-pointer" size={24} />
            <FaApple className="text-black cursor-pointer" size={24} />
          </div>
        </div>

        <div className="text-center mt-4">
          <p>Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;