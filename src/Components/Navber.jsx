// import React from 'react'
// import Logo from "../assets/Pinpoint.png"
// import { TiSocialYoutube } from "react-icons/ti";

// const Navber = () => {
//   return (
//     <div className="flex justify-between items-center w-full h-[150px] px-6 bg-white fixed top-0 left-0 shadow-md z-50">
//       <img src={Logo} className='w-[150px]' />
//       <ul className='flex gap-4 md:gap-14'>
//         <li className='hover: font-bold curson-pointer'>Home</li>
//         <li className='hover: font-bold curson-pointer'>About Us</li>
//         <li className='hover: font-bold curson-pointer'>Contact Us</li>
//       </ul>
//       {/* <button className='bg-red-500 rounded-full text-white '>Subscribe</button> */}
//       <button className=" text-blue-200 bg-blue-950 hover:bg-red-500 rounded-full px-5 py-2.5 me-2 mb-2 flex items-center">Subscribe
//       <TiSocialYoutube className='text-red-500 ml-3' />
//       </button>
//     </div>
//   )
// }

// export default Navber



import React from 'react';
import Logo from "../assets/Pinpoint.png";
import { TiSocialYoutube } from "react-icons/ti";

const Navber = () => {
  return (
    <div className="flex justify-between items-center w-full h-[150px] px-6 bg-white fixed top-0 left-0 shadow-md z-50">
      <img src={Logo} className="w-[150px]" alt="Logo" />
      <ul className="flex gap-8 md:gap-14 italic font-bold text-gray-600">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>
      <button className="text-blue-200 bg-blue-950 hover:bg-red-500 rounded-full px-5 py-2.5 flex items-center">
        Subscribe
        <TiSocialYoutube className="text-red-500 ml-3" />
      </button>
    </div>
  );
};

export default Navber;
