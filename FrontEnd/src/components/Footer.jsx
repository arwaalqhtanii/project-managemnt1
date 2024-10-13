
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Graduation Project Management</h2>
        </div>
        
  
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a href="/" className="hover:text-gray-300">Home</a> */}
         <Link to="/home" className="hover:text-gray-300"> Home </Link>
          <a href="/service" className="hover:text-gray-300">Services</a>
          <a href="/resources" className="hover:text-gray-300">Resources</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>
        

        <p className="text-sm mb-4">
          Streamline your graduation project management and stay organized. Our platform helps you collaborate efficiently with admins and students.
        </p>
        
        {/* أيقونات التواصل الاجتماعي */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
        
        {/* حقوق النشر */}
        <p className="mt-4 text-sm">© 2024 Student Project Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
