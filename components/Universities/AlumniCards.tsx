import AlumniCard from "./AlumniCard";

function AlumniCards() {
  return (
    <div className="">
      <h3 className="py-4 px-2 text-xl font-bold">Notable Alumnis</h3>
      {/* <div className="grid grid-cols-2 gap-4"> */}
      <div className="flex flex-wrap gap-4">
        <AlumniCard />
        <AlumniCard />
        <AlumniCard />
        <AlumniCard />
      </div>
    </div>
  );
}

export default AlumniCards;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// "use client"
// import { useState } from 'react';
// import AlumniCard from './AlumniCard';

// interface Alumni {
//   // Define your Alumni data structure here
// }

// function AlumniCards() {
//   const alumniData: Alumni[] = [/* Your alumni data here */]; // Replace with your actual alumni data
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextAlumni = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
//   };

//   const prevAlumni = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + alumniData.length) % alumniData.length);
//   };

//   return (
//     <div className="relative">
//       <h3 className="py-4 px-2 text-xl font-bold">Notable Alumnis</h3>
//       <div className="grid grid-cols-1 gap-4">
//         <div className="relative">
//           {alumniData.map((alumni, index) => (
//             <div
//               key={index}
//               className={`absolute transition-transform duration-300 ${
//                 index === currentIndex ? 'opacity-100' : 'opacity-0 -translate-x-full'
//               }`}
//             >
//               {/* <AlumniCard data={alumni} /> */}
//               <AlumniCard />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2">
//         <button
//           className="text-gray-500 focus:outline-none"
//           onClick={prevAlumni}
//         >
//           &#8249;
//         </button>
//         <button
//           className="text-gray-500 focus:outline-none"
//           onClick={nextAlumni}
//         >
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AlumniCards;
