export default function NotSure() {
  return (
    <div className="flex-col items-center justify-between">
      <div className="flex-col bg-re-200 items-center justify-between m-auto text-center py-36 -mb-24 w-1/2">
        <h1 className="text-4xl font-bold">Not Sure Where To Start?</h1>
        <p className="text-md p-6" >
          Tell us what matters most to you and we'll create a custom list of
          schools tailored to fit your needs.
        </p>
        <div>
          <img className="-mt-12" src="./checklist.svg" alt="" />
        </div>
        <button className="bg-blue-400 rounded-full px-6 py-2">Take the Quiz </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 flex-col gap-8 space-y-8 pr-8">
          <h1 className="text-4xl font-bold">Partner With Edmission</h1>
          <p>
            Are you a high school, college or university representative? Learn
            more about how you can partner with Edmission to connect with
            students and families throughout the school search process.
          </p>
          <button className="bg-blue-400 px-8 py-2 border-red-400 rounded-full">Claim Your Institution</button>
        </div>
        <div className="flex-1">
          <img src="./campus.svg" alt="campus" />
        </div>
      </div>
    </div>
  );
}
