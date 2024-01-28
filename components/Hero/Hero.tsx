import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="flex flex-col px-6 justify-around h-full md:max-w-full lg:max-w-[90%] lg:w-[900px] text-center">
      <div className="space-y-4 w-[90vw] m-auto min-w-[70%]">
        <h1 className="text-5xl text-ed-text font-bold">
          Find Your Ideal Educational Institution
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
        {/* <div className="flex flex-col p-8 bg-red-200 border-[20px]">
          <div>
            <HeroCard img="./high_schools.svg" title="High Schools" />
          </div>
          <div>
            <HeroCard img="./colleges.svg" title="Colleges" />
          </div>
          <div>
            <HeroCard img="./universities.svg" title="Universities" />
          </div>
        </div> */}
        <div className="p-4 space-y-4">
        <div>
            <HeroCard img="./high_schools.svg" title="High Schools" />
          </div>
          <div>
            <HeroCard img="./colleges.svg" title="Colleges" />
          </div>
          <div>
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
