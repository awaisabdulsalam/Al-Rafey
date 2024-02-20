import { TfiMenuAlt } from "react-icons/tfi";

const Navbar3 = () => {
  return (
    <>
    <nav className='bg-[#eaeaea] pl-8 pt-5'>
        <div className='flex gap-5'>
        <div className='flex bg-[#262261] w-[30%] p-3 gap-5 rounded-tl-2xl rounded-tr-2xl text-white'>
            <TfiMenuAlt className='text-xl mt-1' />
            <h1 className='text-xl'>All Departments</h1>
        </div>
        <div className='pt-5'>
            <ul className='flex gap-0'>
                <li className='border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#tech" className='text-[#757575] hover:text-[#a6a6a6]'>Tech</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#men" className='text-[#757575] hover:text-[#a6a6a6]'>Men</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#women" className='text-[#757575] hover:text-[#a6a6a6]'>Women</a></li>
                <li className='border-l-[1px] border-r-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#children" className='text-[#757575] hover:text-[#a6a6a6]'>Childs</a></li>
                <li className='border-l-[1px] border-[#a2a2a2] px-5 text-[18px]'><a href="#grocery" className='text-[#757575] hover:text-[#a6a6a6]'>Grocery</a></li>
            </ul>
        </div>
        </div>
    </nav>
    </>

  )
}

export default Navbar3