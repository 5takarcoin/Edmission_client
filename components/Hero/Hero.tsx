import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div>
      <div>
        <h1>Find Your Ideal Educational Institution</h1>
        <p>Finding the right school should not be hard. From high school to college to universities, we make it easy to discover the best ones for you.</p>
      </div>
      <div>
        <p>Select a Category to Start Your Search</p>
        <div>
            <HeroCard img="first" title="haha 1"/>
            <HeroCard img="second" title="haha 2"/>
            <HeroCard img="third" title="haha 3"/>
        </div>
        <p>Or, take the Edmission Quiz</p>
      </div>
    </div>
  )
}
