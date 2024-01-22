import { FaStar } from "react-icons/fa";
import UniCatCard from "./UniCatCard";

function UniAboutCard() {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="About">
        <div>
          <div className="flex gap-2 items-center">
            <FaStar />
            <p>Ye It's Good</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaStar />
            <p>Ye It's Good</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaStar />
            <p>Ye It's Good</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaStar />
            <p>Ye It's Good</p>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

export default UniAboutCard;
