
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#2B39A0] text-white py-8 w-full mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold max-sm:text-xl">Graduation Project Management</h2>
        </div>
        
  
        <div className="flex justify-center space-x-6 mb-4 max-sm:text-sm">
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
          <p className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </p>
          <p className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </p>
          <p className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </p>
          <p className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </p>
        </div>
        
        {/* حقوق النشر */}
        <p className="mt-4 text-sm">© 2024 Student Project Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
