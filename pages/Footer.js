import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white py-8 px-4"> {/* Blue background, white text, padding */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center"> {/* Container, flexbox for responsiveness */}

        {/* Follow Us Section */}
        <div className="mb-6 md:mb-0"> {/* Margin bottom on mobile, none on larger screens */}
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          {/* Add social media links here */}
          <a href="#" className="mr-4 hover:text-gray-300"> {/* Example link */}
            <img src="/images/social-icon-1.png" alt="Social 1" className="h-6 w-6 inline" />
          </a>
          <a href="#" className="hover:text-gray-300"> {/* Example link */}
            <img src="/images/social-icon-2.png" alt="Social 2" className="h-6 w-6 inline" />
          </a>
        </div>

        {/* Get Help Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Get Help</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Monitor</a></li>
            <li><a href="#" className="hover:text-gray-300">Registration</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Useful Links</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Hero</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
          </ul>
        </div>

        {/* Remain Updated Section */}
        <div>
          <h4 className="font-bold text-lg mb-2">Remain Updated</h4>
          <div className="flex"> {/* Flexbox for input and button */}
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none" 
            />
            <button className="bg-white text-blue-800 py-2 px-4 rounded-r hover:bg-gray-200 focus:outline-none">
              Sign Up
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-600"> {/* Added border top */}
        Copyright &copy; {currentYear}, OJT Monitoring System, All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;