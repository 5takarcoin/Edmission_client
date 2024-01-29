import { GoArrowRight } from "react-icons/go";

export default function NotSure() {
  return (
    <div className="flex-col items-center justify-between">
      <div className=" text-center pt-36">
        <h1 className="text-4xl font-bold">Not Sure Where To Start?</h1>
        <p className="text-md p-6" >
          Tell us what matters most to you and we'll create a custom list of
          schools tailored to fit your needs.
        </p>
        <div>
          <img className="h-80 text-center w-full -mt-8" src="./checklist.svg" alt="" />
        </div>
        <button className="m-auto border-ed-sec border-2 text-ed-text border-solid rounded-md px-8 py-2 flex gap-2 items-center"><span>Take the Quiz</span> <span className="text-xl"><GoArrowRight /></span> </button>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex-col gap-8 space-y-8 pr-8 p-12 pb-0">
          <h1 className="text-4xl font-bold pt-12">Partner With Edmission</h1>
          <p>
            Are you a high school, college or university representative? Learn
            more about how you can partner with Edmission to connect with
            students and families throughout the school search process.
          </p>
          <button className="border-ed-sec border-2 text-ed-text border-solid rounded-md px-8 py-2 flex gap-2 items-center"><span>Claim Your Institution</span> <span className="text-xl"><GoArrowRight /></span> </button>
        </div>
        <div className="flex-1">
          <img className="h-80" src="./campus.svg" alt="campus" />
        </div>
      </div>
    </div>
  );
}
