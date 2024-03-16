import React, { useState } from "react";
import InputField from "./InputField";
import CheckBoxField from "./CheckBoxField";
import NumberField from "./NumberField";
import { Reviews } from "@/types/CategoryTypes";

const ReviewField = ({
  uniId,
  userId,
  setReviews,
}: {
  uniId: string;
  userId: string;
  setReviews: React.Dispatch<React.SetStateAction<Reviews[]>>;
}) => {
  const [rev, setRev] = useState("");
  const [stars, setStars] = useState(0);
  const [rec, setRec] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (image) formData.append("image", image);
    const body = {
      view: rev,
      stars: stars,
      recommend: rec,
      by: userId,
    };

    const url = `${process.env.NEXT_PUBLIC_API}api/unis/${uniId}/review`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Optionally, include Accept header if needed
        // Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.status === 201) {
      const data: Reviews[] = await response.json();
      setReviews(data);
    }

    setRev("");
    setRec(false);
    setStars(0);

  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <InputField id="review_view" value={rev} setValue={setRev}>
        Comment
      </InputField>
      <NumberField id="review_stars" value={stars} setValue={setStars}>
        Username
      </NumberField>
      <CheckBoxField isChecked={rec} setIsChecked={setRec} field="Recommend" />
      {/* <div className="mb-5">
              <div className="my-4">{image ? <img src={URL.createObjectURL(image)} alt="" /> : <p>No image selected</p>}</div>
              <label htmlFor="image" className="mb-2 text-ed-text text-sm bg-white rounded-md border border-ed-sec font-medium h-10 w-full flex justify-center  items-center text-center"><span>{image ? "Change avatar" : "Choose your avatar"}</span></label>
              <input onChange={e => setImage(e.target.files ? e.target.files[0] : null)} type="file" id="image" className="hidden"/>
            </div> */}
      <button
        type="submit"
        className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Comment
      </button>
    </form>
  );
};

export default ReviewField;
