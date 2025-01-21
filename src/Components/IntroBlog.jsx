
import React from "react";
import BlackHole from "../assets/id-1.jpg"
import Developers  from "../assets/id-2.jpg";
import Women from "../assets/Women.jpg"
import Music from "../assets/Music.jpg"
import Pollution from "../assets/Pollution.jpg"
// import Social_Media from "../assets/Social_Media.jpg"

const IntroBlog = ({ tags, secondTags }) => {
  if (!tags || !secondTags) {
    return <p>Loading...</p>; // Show a placeholder while the data is loading
  }

  return (
    <div className="space-y-8">
      {/* First Blog */}
      <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{tags.title}</h2>
            <p className="text-gray-600 mt-2">{tags.description}</p>
          </div>
          <img src={BlackHole} className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div>

      {/* Second Blog */}
      <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{secondTags.title}</h2>
            <p className="text-gray-600 mt-2">{secondTags.description}</p>
          </div>
          <img src={Developers} className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div>

      <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{secondTags.title}</h2>
            <p className="text-gray-600 mt-2">{secondTags.description}</p>
          </div>
          <img src= {Women} className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div>

      <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{secondTags.title}</h2>
            <p className="text-gray-600 mt-2">{secondTags.description}</p>
          </div>
          <img src= {Pollution} className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div>


      {/* <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{secondTags.title}</h2>
            <p className="text-gray-600 mt-2">{secondTags.description}</p>
          </div>
          <img src= {Social_Media } className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div> */}


      <div className="p-4 border border-gray-200 shadow-md rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-xl font-bold">{secondTags.title}</h2>
            <p className="text-gray-600 mt-2">{secondTags.description}</p>
          </div>
          <img src= {Music} className="w-[100px] h-[100px] object-cover" alt="Image description" />
        </div>
      </div>


    </div>
  );
};

export default IntroBlog;
