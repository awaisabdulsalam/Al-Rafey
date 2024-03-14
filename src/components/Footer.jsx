import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

import footerLogo from '../assets/footerlogo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sm:py-20 sm:px-[10px] bg-[#f6f6f6] mt-[-30px] pt-20 pb-10 md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex sm:justify-center md:justify-start items-center">
            <Link to="/al-rafey/home">
            <img src={footerLogo} alt="Logo" className="h-16 mr-2" />
            </Link>
          </div>
          <p className="sm:text-[12px] md:text-[14px] sm:justify-center font-normal text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero. Ea fugit tenetur quaerat sint dicta quo ipsam molestiae ad?</p>
          <div className="flex my-5 gap-4 sm:justify-center md:justify-start">
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[16px] md:text-[20px] text-2xl cursor-pointer" />
              </a>
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="text-[16px] md:text-[20px] text-2xl cursor-pointer" />
              </a>
            <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <SiLinkedin  className="sm:text-[14px] md:text-[16px] mt-[2px] cursor-pointer" />
              </a>

          </div>
        </div>

        <div className="sm:hidden md:block col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>


        {/* *********************** */}
        <div className="md:hidden flex justify-between px-2">
        <div className="">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>
        </div>


        <div className="sm:hidden md:block col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>


        {/* *********************** */}
        <div className="md:hidden flex justify-between px-2">
        <div className="">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500'>FAQs</a></li>
          </ul>
        </div>
        </div>
        {/* ********************** */}

        <div className="sm:hidden md:block col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>FAQs</a></li>
          </ul>
        </div>

        <div className="sm:hidden md:block col-span-1 md:col-span-1">
          <h2 className="sm:text-[13px] md:text-[18px] text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>Home</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>About</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='sm:text-[12px] md:text-[14px] text-gray-500 '>FAQs</a></li>
          </ul>
        </div>
      </div>
      <hr className="sm:my-10"/>
      <div className="copyright flex justify-center mt-5 text-gray-500">
        <p>All Rights Reserved by Company</p>
      </div>
    </footer>
  );
}

export default Footer;
