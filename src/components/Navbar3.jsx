import { TfiMenuAlt } from "react-icons/tfi";

const Navbar3 = () => {
  return (
    <>
    {/* <nav className='nav_three bg-[#eaeaea] sm:pl-4 pl-8 pt-5'>
        <div className='flex md:gap-5'>
        <div className='all_departments flex bg-[#262261] md:w-[30%] sm:py-3 md:px-3  gap-5 rounded-tl-2xl rounded-tr-2xl text-white'>
            <TfiMenuAlt className='depart_icon text-xl mt-1' />
            <h1 className='depart_text sm:text-[10px] text-xl'>All Departments</h1>
        </div>
        <div className='pt-5'>
            <ul className='flex gap-0'>
                <li className='border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#tech" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Tech</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#men" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Men</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#women" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Women</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#children" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Childs</a></li>
                <li className='border-l-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#grocery" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Grocery</a></li>
            </ul>
        </div>
        </div>
    </nav> */}

    {/* *************** */}

    <nav className='nav_three bg-[#eaeaea] sm:pl-4 pl-8 pt-5'>
  <div className='flex flex-col sm:flex-row md:gap-5'>
    <div className='all_departments flex items-center bg-[#262261] sm:w-[30%] sm:py-3 sm:px-3 gap-5 rounded-tl-2xl rounded-tr-2xl text-white'>
      <TfiMenuAlt className='depart_icon text-xl' />
      <h1 className='depart_text sm:text-[10px] md:text-xl'>All Departments</h1>
    </div>
    <div className='pt-5'>
      <ul className='flex flex-col sm:flex-row gap-0'>
        <li className='border-[#a2a2a2] md:border-r-[1px] px-5 text-[18px]'><a href="#tech" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Tech</a></li>
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="#men" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Men</a></li>
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="#women" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Women</a></li>
        <li className='border-l-[1px] md:border-r-[1px] md:border-[#a2a2a2] px-5 text-[18px]'><a href="#children" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Children</a></li>
        <li className='md:border-l-[1px] md:border-[#a2a2a2] sm:border-l-0 px-5 text-[18px]'><a href="#grocery" className='nav_categories text-[#757575] hover:text-[#a6a6a6]'>Grocery</a></li>
      </ul>
    </div>
  </div>
</nav>

    {/* ********************* */}
    </>

  )
}

export default Navbar3