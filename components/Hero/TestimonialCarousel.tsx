"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  about: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (

        <div className="relative max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
          key={testimonial.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-50 text-center px-8 py-4 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          >
            <div className="w-[full] pt-8">

                <div className="bg-white p-8 relative rounded-lg text-ed-text">
      <div>
        <img className="h-8 pb-2" src="./quote.svg" alt="" />
            <p className="text-sm pb-6">{testimonial.text}</p>
            <p className="text-xs font-semibold mt-2">{testimonial.author}</p>
            <p className="text-xs mt-2">{testimonial.about}</p>
          </div>
            </div>
        </div>
      </div>
        ))}

      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full bg-gray-400 focus:outline-none ${
              index === currentSlide ? "" : ""
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default TestimonialCarousel;
