import FeaturesCard from "./FeaturesCard";
import TestimonialCarousel from "./TestimonialCarousel";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  about: string;
}

export default function Features() {
  const testis: Testimonial[] = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie rhoncus velit, mollis placerat nulla tincidunt vel. Phasellus nec ipsum eu quam egestas convallis in sit amet risus. Ut imperdiet ullamcorper massa, nec iaculis leo ultrices eget. Donec in enim lectus. Duis",
      author: "MR Rizon",
      about: "Studen, North South University"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie rhoncus velit, mollis placerat nulla tincidunt vel. Phasellus nec ipsum eu quam egestas convallis in sit amet risus. Ut imperdiet ullamcorper massa, nec iaculis leo ultrices eget. Donec in enim lectus. Duis",
      author: "MuYe Sabil",
      about: "Jack of many trades"
    },
  ];

  return (
    <div className="flex-col items-center justify-between bg-blue-400">
      <div className="flex-col bg-re-200 items-center justify-between m-auto text-center py-36 -mb-24 w-7/12">
        <h1 className="text-4xl font-bold">
          Choosing The Right Institution Got A Whole Lot Easier!
        </h1>
        <p className="text-md p-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          molestie rhoncus velit
        </p>
      </div>
      <div>
        <div className="flex space-x-8 items-center justify-between">
          <FeaturesCard img="./search.svg" title="Explore A List Of Hundreds of Institutions" />
          <FeaturesCard img="./review.svg" title="Go Over Thousands of User Reviews" />
          <FeaturesCard img="./list.svg" title="Get A List Suited To your personal needs" />
        </div>
        <div className="bg-blue-400 p-[200px]">
          <TestimonialCarousel testimonials={testis} />
        </div>
      </div>
    </div>
  );
}
