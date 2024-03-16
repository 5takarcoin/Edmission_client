import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="flex flex-col px-6 justify-around h-full lg:max-w-[60%] m-auto text-center">
      <div className="space-y-4 w-[90vw] m-auto min-w-[70%] md:max-w-[80%]">
        <h1 className="text-5xl text-ed-text font-bold">
          Find Your Ideal Educational Institution {process.env.API_LINK}
        </h1>
        <p>
          Finding the right school should not be hard. From high school to
          college to universities, we make it easy to discover the best ones for
          you.
        </p>
      </div>
      <div className="">
        <p className="text-ed-sec font-semibold pb-8">
          Select a Category to Start Your Search
        </p>
        <div className="p-4 flex flex-col lg:items-center lg:justify-center md:flex-row gap-4">
        <div className="flex-1">
            <HeroCard img="./high_schools.svg" title="High Schools" />
          </div>
          <div className="flex-1">
            <HeroCard img="./colleges.svg" title="Colleges" />
          </div>
          <div className="flex-1">
            <HeroCard img="./universities.svg" title="Universities" />
          </div>
        </div>
        <p className="p-8 mb-10 font-semibold text-ed-sec">
          Or, take the Edmission Quiz
        </p>
      </div>
    </div>
  );
}
