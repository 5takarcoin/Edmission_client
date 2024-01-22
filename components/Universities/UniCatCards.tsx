import { FaStar } from "react-icons/fa";
import UniCatCard from "./UniCatCard";
import UniAboutCard from "./UniAboutCard";

function UniCatCards() {
  return (
    <div className="flex flex-wrap justify-between">
      
      <UniAboutCard />
      <UniAboutCard />
      <UniAboutCard />
      <UniAboutCard />
    </div>
  );
}

export default UniCatCards;
