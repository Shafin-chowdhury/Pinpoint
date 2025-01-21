// import React from "react";
// import BlackHole from "../assets/Banner.png";

// const Blogs = ({ tags }) => {
//   if (!Array.isArray(tags) || tags.length === 0) {
//     return <p>No blogs available.</p>; // Fallback message if tags is not an array or empty
//   }

// const Blogs = () => {
//   return (
//     <div className="grid grid-cols-2 gap-6 p-6">
//       {tags.map((tag) => (
//         <div
//           key={tag.id}
//           className="border border-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//         >
//           <img
//             src={BlackHole} // Replace this with `tag.image` if tags include an image property
//             alt={tag.title}
//             className="w-full h-40 object-cover rounded-lg"
//           />
//           <h2 className="text-lg font-bold mt-4">{tag.title}</h2>
//           <p className="text-gray-600 mt-2 text-sm">{tag.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// };

// export default Blogs;
