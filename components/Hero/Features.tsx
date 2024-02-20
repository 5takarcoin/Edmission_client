import FeaturesCard from "./FeaturesCard";
import TestimonialCarousel from "./TestimonialCarousel";
import Testimonials from "./Testimonials";

export default function Features() {
  return (
    <div className="flex-col items-center justify-between text-white bg-ed-prim w-[calc(100vw+1px)]">
      <div className="flex-col items-center justify-between m-auto text-center w-11/12 lg:max-w-[60%]">
        <h1 className="text-4xl font-bold">
          Choosing The Right Institution Got A Whole Lot Easier!
        </h1>
        <p className="text-md p-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          molestie rhoncus velit
        </p>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between w-[100vw] lg:max-w-[60%] m-auto">
          <div className="w-full">
            <FeaturesCard
              img="./search.svg"
              title="Explore A List Of Hundreds of Institutions"
            />
          </div>
          <div className="w-full">
            <FeaturesCard
              img="./review.svg"
              title="Go Over Thousands of User Reviews"
              reverse
            />
          </div>
          <div className="w-full">
            <FeaturesCard
              img="./list.svg"
              title="Get A List Suited To your personal needs"
            />
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
}
