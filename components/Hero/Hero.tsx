import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="space-y-8  max-w-[90%] w-[900px] text-center">
      <div className="space-y-4 w-[400px] m-auto min-w-[70%]">
        <h1 className="text-5xl font-bold">Find Your Ideal Educational Institution</h1>
        <p>Finding the right school should not be hard. From high school to college to universities, we make it easy to discover the best ones for you.</p>
      </div>
      <div>
        <p className="pb-8">Select a Category to Start Your Search</p>
        <div className="flex space-x-8 items-center justify-between">
            <HeroCard img="./high_schools.svg" title="High Schools"/>
            <HeroCard img="./colleges.svg" title="Colleges"/>
            <HeroCard img="./universities.svg" title="Universities"/>
        </div>
        <p className="p-8 font-bold text-red-600">Or, take the Edmission Quiz</p>
      </div>
    </div>
  )
}
