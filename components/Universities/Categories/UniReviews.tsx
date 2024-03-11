import { Reviews } from "@/types/CategoryTypes";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import Testy from "./Testy";

const UniReviews = ({ reviews }: { reviews: Reviews[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [revis, setRevis] = useState([] as Reviews[]);

  useEffect(() => {
    if(!showAll)
      setRevis(reviews.slice(0, 10));
    else
      setRevis(reviews);

  }, [reviews, showAll]);

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
          {revis.map((rev, i) => {
            return (
              <div key={"revere" + i}>
                {rev.recommended ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
                <p>
                  <span>{rev.from}</span> <span>{rev.date}</span>
                </p>
                <p className="flex">
                  {Array.from({ length: rev.stars }).map((_, index) => (
                    <span key={index}>
                      <FaStar />
                    </span>
                  ))}
                  {Array.from({ length: 5 - rev.stars }).map((_, index) => (
                    <span key={index}>
                      <CiStar />
                    </span>
                  ))}
                </p>
                <p>{rev.view}</p>
              </div>
            );
          })}
          {!showAll ? (
            <button onClick={() => setShowAll(true)}>
              Show All
            </button>
          ) : (
            <button  onClick={() => setShowAll(false)}>
              Show Newest
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniReviews;
