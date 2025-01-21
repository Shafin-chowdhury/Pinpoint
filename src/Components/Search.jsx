

import React, { useState } from "react";
import Banner from "../assets/Banner.png";
import { IoSearch } from "react-icons/io5";
import IntroBlog from "./IntroBlog";
import Blogs from "./Blogs";

const Search = () => {
  const tags = [
    {
      id: 1,
      name: "All",
      title: "Black hole meth busted: They don't suck anything in......",
      description: "Discover a wide range of posts from various categories and topics, offering something for everyone, whether you're looking for inspiration, knowledge, or entertainment.",
    },
    {
      id: 2,
      name: "For You",
      title: "Recommended for You",
      description: "Enjoy personalized content curated just for you based on your preferences and interests, making it easier to find what you truly care about and engage with.",
    },
    {
      id: 3,
      name: "Featured",
      title: "Featured Posts",
      description: "A Day in the Life - Cella Jane | Branding photoshoot inspiration",
    },
    {
      id: 4,
      name: "Following",
      title: "Following",
      description: "Keep up with the latest posts and updates Crime: The Hidden Cost of Air Pollution the accounts and creators you follow, ensuring you never miss out on content that matters most to you.",
    },
    {
      id: 5,
      name: "Film",
      title: "Film",
      description: "Explore engaging posts about movies, filmmaking, and the latest trends in cinema, perfect for film enthusiasts who enjoy discussions on storytelling, acting, and cinematography.",
    },
    {
      id: 6,
      name: "Language",
      title: "Language for you",
      description: "Delve into posts about languages, linguistics, and communication.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Determine the second blog (e.g., the next tag)
  const secondBlogIndex = (activeIndex + 1) % tags.length; // Loop back to the first if at the end

  return (
    <div className="flex justify-center mt-[150px] flex-col px-[70] md:px-[150px]">
      <img src={Banner} className="rounded-2xl" alt="Banner" />
      <div className="bg-white shadow-lg p-4 rounded-lg mt-[-24px] mx-[25%] flex items-center">
        <IoSearch className="text-[20px] text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none ml-2"
        />
      </div>

      <div className="flex gap-10 justify-center m-8  italic font-bold text-gray-600">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`${
              index === activeIndex ? "bg-red-500" : ""
            } p-1 pb-2 md:rounded-full cursor-pointer md:px-4 
            hover:scale-105 hover:border-[1px] duration-100 transition-all ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>

      {/* Pass both tags to IntroBlog */}
      <IntroBlog tags={tags[activeIndex]} secondTags={tags[secondBlogIndex]} />
      <Blogs tags={tags} />

    </div>
  );
};

export default Search;
