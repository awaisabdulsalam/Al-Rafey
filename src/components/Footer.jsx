import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

import footerLogo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer_section bg-[#f6f6f6] mt-[-30px] pt-20 pb-10 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center">
            <img src={footerLogo} alt="Logo" className="h-16 mr-2" />
          </div>
          <p className="footer_text font-normal text-gray-500 text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero. Ea fugit tenetur quaerat sint dicta quo ipsam molestiae ad?</p>
          <div className="flex my-5 gap-4">
            <FaFacebook className="footer_icon text-2xl cursor-pointer" />
            <RiInstagramFill className="footer_icon text-2xl cursor-pointer" />
            <SiLinkedin  className="footer_icon_linkedin text-[20px] mt-[2px] cursor-pointer" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h2 className="footer_heading text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='footer_text text-gray-500'>Home</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500'>About</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500'>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500'>FAQs</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h2 className="footer_heading text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='footer_text text-gray-500 '>Home</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>About</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>FAQs</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h2 className="footer_heading text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='footer_text text-gray-500 '>Home</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>About</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>FAQs</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h2 className="footer_heading text-lg font-bold mb-4">Website Links</h2>
          <ul>
            <li><a href="#" className='footer_text text-gray-500 '>Home</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>About</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>Get in Touch</a></li>
            <li className="mt-4"><a href="#" className='footer_text text-gray-500 '>FAQs</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright flex justify-center mt-5 text-gray-500">
        <p>All Rights Reserved by Company</p>
      </div>
    </footer>
  );
}

export default Footer;
