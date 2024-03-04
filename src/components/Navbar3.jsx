import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar3 = () => {
  return (
    <>
    <nav className='bg-[#eaeaea] sm:px-2 md:px-4 pt-5'>
  <div className='sm:flex sm:flex-col md:flex md:flex-row md:justify-start sm:justify-center md:gap-5'>
    <div className='sm:gap-2 sm:px-4 sm:py-1 md:px-3 md:py-1 flex items-center bg-[#262261] sm:w-[100%] md:w-[30%] md:gap-3 rounded-tl-2xl rounded-tr-2xl text-white'>
      <TfiMenuAlt className='sm:text-[12px] md:text-lg' />
      <h1 className='sm:text-[12px] md:text-lg'>All Departments</h1>
    </div>
    <div className='pt-5 sm:pb-5'>
      <ul className='flex flex-col sm:flex-col md:flex-row gap-0'>
        <li className='border-[#a2a2a2] md:border-r-[1px] px-5 text-[18px]'><a href="#tech" className='sm:text-[12px] text-[#757575] md:text-[16px] hover:text-[#a6a6a6]'>Tech</a></li>
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="#men" className='sm:text-[12px] md:text-[16px] text-[#757575] hover:text-[#a6a6a6]'>Men</a></li>
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="#women" className='sm:text-[12px] md:text-[16px] text-[#757575] hover:text-[#a6a6a6]'>Women</a></li>
        <Link to="al-rafey/categories">
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="" className='sm:text-[12px] md:text-[16px] text-[#757575] hover:text-[#a6a6a6]'>Categories</a></li>
        </Link>
      </ul>
    </div>
  </div>
</nav>

    {/* ********************* */}
    </>

  )
}

export default Navbar3