import React, { useState } from 'react';
import Banner from "../assets/Banner.png";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const tags= [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'For You'
    },
    {
      id: 3,
      name: 'Featured'
    },
    {
      id: 4,
      name: 'Followwing'
    },
    {
      id: 5,
      name: 'Film'
    },
    {
      id: 6,
      name: 'Language'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center mt-[150px] flex-col px-[70] md:px-[150px]">
      <img src={Banner} className="rounded-2xl" alt="Banner" />
      <div className=" bg-white shadow-lg p-4 rounded-lg mt-[-24px] mx-[25%] flex items-center">
      <IoSearch className='text-[20px] text-gray-400' />
        <input
          type="text"
          placeholder="Search"
          className="outline-none" ml-2
        />
      </div>

      <div className='flex gap-10 justify-center mt-8 italic font-bold text-gray-600'>
        {tags.map((item, index)=>(
          <ul onClick={() => setActiveIndex(index)}
          className={`${index === activeIndex ? 'bg-red-500' : ''} p-1 pb-2 md:rounded-full cursor-pointer md:px-4 
          hover:scale-105 hover:border-[1px] duration-100 transition-all ease-in-out`}>

            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;
