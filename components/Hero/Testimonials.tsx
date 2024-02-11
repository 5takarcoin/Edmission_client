import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  about: string;
}

function Testimonials() {
  const testis: Testimonial[] = [
    {
      id: 1,
      text: "Rizon er Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie rhoncus velit, mollis placerat nulla tincidunt vel. Phasellus nec ipsum eu quam egestas convallis in sit amet risus. Ut imperdiet ullamcorper massa, nec iaculis leo ultrices eget. Donec in enim lectus. Duis",
      author: "MR Rizon",
      about: "Studen, North South University",
    },
    {
      id: 2,
      text: "Sabil er Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie rhoncus velit, mollis placerat nulla tincidunt vel. Phasellus nec ipsum eu quam egestas convallis in sit amet risus. Ut imperdiet ullamcorper massa, nec iaculis leo ultrices eget. Donec in enim lectus. Duis",
      author: "MuYe Sabil",
      about: "Jack of many trades",
    },
  ];
  return (
    <div className="w-full md:w-10/12 m-auto h-96">
      <TestimonialCarousel testimonials={testis} />
    </div>
  );
}

export default Testimonials;
