import FeaturesCard from "./FeaturesCard";
import TestimonialCarousel from "./TestimonialCarousel";

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export default function Features() {

  const testis: Testimonial[] = [
    {
      id: 1,
      text: "some text",
      author: "some author"
    },
    {
      id: 2,
      text: "some another text",
      author: "some author"
    }
  ]

  return (
    <div>
      <div>
        <h1>Choosing The Right Institution Got A Whole Lot Easier!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          molestie rhoncus velit
        </p>
      </div>
      <div>
        <div>
          <FeaturesCard  img="kul img" title="veri kul title"/>
          <FeaturesCard  img="kul img" title="veri kul title"/>
          <FeaturesCard  img="kul img" title="veri kul title"/>
        </div>
        <div className="bg-blue-400 p-[200px]">
          <TestimonialCarousel testimonials={testis}/>
        </div>
      </div>
    </div>
  );
}
