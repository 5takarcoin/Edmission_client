export default function Footer() {
  return (
    // <div className="flex-col items-center justify-between bg-ed-white">
    //   <div className="flex justify-between">
    //     <div className="space-y-8 flex-1 bg-red-500">
    //       <div className="h-4">
    //         <img className="h-8" src="./edmission.svg" alt="" />
    //       </div>
    //       <p className="">Helping you find your ideal institution.</p>
    //       <h3 className="py-16">A concern of Khiyo Inc.</h3>
    //     </div>
        // <div className="flex flex-1 bg-red-900 justify-between gap-32 items-center">
        //   <div>
        //     <h3 className="py-2 font-bold">EXPLORE</h3>
        //     <li className="list-none py-2">High Schools</li>
        //     <li className="list-none py-2">Colleges</li>
        //     <li className="list-none py-2">Universities</li>
        //     <li className="list-none py-2">EdJourney</li>
        //   </div>
        //   <div>
        //     <h3 className="py-2 font-bold">FOLLOW US</h3>
        //     <li className="list-none py-2">Facebook</li>
        //     <li className="list-none py-2">Youtube</li>
        //     <li className="list-none py-2">Instagram</li>
        //     <li className="list-none py-2">Threads</li>
        //   </div>
        // </div>
    //   </div>
    //   <div>
    //     <p className="pt-16 ">All Rights Reserved by Khiyo Inc. © 2023</p>
    //   </div>
    // </div>

    <div className="bg-ed-white p-12">
      <div className="space-y-8 flex-1 pb-12">
        <div className="h-4">
          <img className="h-8" src="./edmission.svg" alt="" />
        </div>
        <p className="">Helping you find your ideal institution.</p>
        <h3 className="">A concern of Khiyo Inc.</h3>
      </div>
      <div className="flex flex-1 justify-between items-center">
          <div className="flex-1">
            <h3 className="py-2 font-bold">EXPLORE</h3>
            <li className="list-none py-2">High Schools</li>
            <li className="list-none py-2">Colleges</li>
            <li className="list-none py-2">Universities</li>
            <li className="list-none py-2">EdJourney</li>
          </div>
          <div className="flex-1">
            <h3 className="py-2 font-bold">FOLLOW US</h3>
            <li className="list-none py-2">Facebook</li>
            <li className="list-none py-2">Youtube</li>
            <li className="list-none py-2">Instagram</li>
            <li className="list-none py-2">Threads</li>
          </div>
        </div>
    </div>
  );
}
