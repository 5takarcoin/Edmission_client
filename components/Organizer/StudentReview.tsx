"use client";

import InputField from "@/components/Organizer/InputField";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NumberField from "./NumberField";
import CheckBoxField from "./CheckBoxField";

export default function StudentReview() {
const [selectedLoginType, setSelectedLoginType] =
    useState<boolean>(true);

    const user = useAppSelector((state) => state.user);
    const router = useRouter();

    const [view, setView] = useState("");
    const [recommend, setRecommend] = useState(true);
    const [stars, setStars] = useState(3);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const formData = new FormData();
    console.log(formData);
    formData.append("view", view);
    formData.append("recommend", recommend.toString());
    formData.append("stars", stars.toString());

    const url = process.env.NEXT_PUBLIC_API + "review/add";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    if (response.status === 201) {
      router.push("/login");
      console.log(response);
    }
  };

  return (
    <div className="flex text-ed-text items-center justify-center min-h-[600px]">
      <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl">
        <h1 className="block text-2xl mb-8 font-bold">Sign Up</h1>
        <form className="" onSubmit={handleSubmit}>
          <InputField id="input_review" value={view} setValue={setView}>
            Review
          </InputField>
          <NumberField
            id="review_stars"
            value={stars}
            setValue={setStars}
          >
            Rate
          </NumberField>
          
          <div className="flex flex-col gap-2 pb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5"
                value="Recommend"
                checked={selectedLoginType}
                onChange={() => setSelectedLoginType(true)}
              />
              <span className="ml-2">Recommend</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5"
                value="Don't Recommend"
                checked={!selectedLoginType}
                onChange={() => setSelectedLoginType(false)}
              />
              <span className="ml-2">Don't Recommend</span>
            </label>
            </div>
          {/* <div className="mb-5">
              <div className="my-4">{image ? <img src={URL.createObjectURL(image)} alt="" /> : <p>No image selected</p>}</div>
              <label htmlFor="image" className="mb-2 text-ed-text text-sm bg-white rounded-md border border-ed-sec font-medium h-10 w-full flex justify-center  items-center text-center"><span>{image ? "Change avatar" : "Choose your avatar"}</span></label>
              <input onChange={e => setImage(e.target.files ? e.target.files[0] : null)} type="file" id="image" className="hidden"/>
            </div> */}

          <button
            type="submit"
            className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
