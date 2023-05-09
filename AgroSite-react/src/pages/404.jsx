import React from "react";
import { Link } from "react-router-dom";
import FoFPng from "../assets/404-error.png";
import AnimatedTitle from "../components/title/AnimatedTitle";

export default function FoF() {
  return (
    <div className="select-none flex flex-col items-center justify-center h-screen bg-gray-100 gap-y-3">
      <img src={FoFPng} alt="" className="h-20" />
      <AnimatedTitle />
      <h1 className="text-5xl font-bold text-d36938 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page not found</p>
      <Link
        to="/"
        className="bg-d36938 hover:bg-opacity-90 text-black font-semibold py-2 px-4 rounded shadow"
      >
        Go back to homepage
      </Link>
    </div>
  );
}
// const AnimatedTitle = () => {
//   return (
//     <div className="text-[#d36938] text-4xl font-bold tracking-wide">
//       <span className="inline-block animate-pulse mr-2">A</span>
//       <span className="inline-block animate-pulse mr-2">g</span>
//       <span className="inline-block animate-pulse mr-2">r</span>
//       <span className="inline-block animate-pulse mr-2">o</span>
//       <span className="inline-block animate-pulse mr-2">s</span>
//       <span className="inline-block animate-pulse mr-2">i</span>
//       <span className="inline-block animate-pulse">t</span>
//       <span className="inline-block animate-pulse ml-2">e</span>
//     </div>
//   );
// };
