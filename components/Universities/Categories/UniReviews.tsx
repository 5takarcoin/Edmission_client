import { Reviews } from "@/types/CategoryTypes";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import Testy from "./Testy";

const UniReviews = ({ reviews }: { reviews: Reviews[] }) => {
  return (
    <div>
      <h1 className="font-bold">Reviews</h1>
      <div>
        <p className="flex">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>78 Reviews</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <div>80% 20%</div>
          <div>Excellent</div>
          <div>Very Good</div>
          <div>Average</div>
          <div>Poor</div>
          <div>Terrible</div>
        </div>
        <div className="flex-[3]">
          {reviews.map((rev, i) => {
            return (
              <div key={"revere" + i}>
                {rev.recommended ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
                <p><span>{rev.from}</span> <span>{rev.date}</span></p>
                <p className="flex">

                {Array.from({ length: rev.stars }).map((_, index) => (
                    <span key={index} ><FaStar /></span>
                    ))}
                    {Array.from({ length: 5-rev.stars }).map((_, index) => (
                    <span key={index} ><CiStar /></span>
                    ))}
                    </p>
                <p>{rev.view}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UniReviews;
