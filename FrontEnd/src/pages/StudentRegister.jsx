import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const apiURL = 'https://66e7e6bbb17821a9d9da704c.mockapi.io/home';
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === 'student' && !email.endsWith('@tuwaiq.com')) {
      alert('Students must use an email with the domain "@tuwaiq.com".');
      return;
    }

    if (password.length < 5) {
      alert('Password must be at least 5 characters long.');
      return;
    }

    const userData = {
      name,
      email,
      password,
      userType,
    };

    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          if (userType === 'admin') {
            alert('Admin account created successfully!');
            navigate('/هنا صفحه يوسف'); 
          } else {
            alert('Student account created successfully!');
            navigate('/هنا صفحه حنين'); 
          }

          setEmail('');
          setName('');
          setPassword('');
          setUserType('student');
        } else {
          alert('There was an error creating the account.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error connecting to the server.');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
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
            <small className='text-gray-500 ml-2'>Username should have one capital letter.</small>
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
            <small className='text-gray-500 ml-2'>If you're a student, your email should have @tuwaiq.</small>
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
            <small className='text-gray-500 ml-2'>Password should have at least 5 characters.</small>
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
