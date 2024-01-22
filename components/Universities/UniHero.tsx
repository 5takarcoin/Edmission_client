import { University } from "@/types/UniversityTypes"
import { FaStar } from "react-icons/fa"
import { GoLocation } from "react-icons/go"


export default function UniHero({uni}: {uni: University}) {
  return (
    <div className="flex gap-4">
      <div className="flex-col space-y-8 flex-[2]">
        <div className="flex items-center">
            <div className="h-32 w-32"><img src={uni.logo} alt={`${uni.name} university logo`} /></div>
            <div className="space-y-4 p-4">
                <h2 className="text-4xl font-bold">{uni.name}</h2>
                <p className="flex items-center gap-2"><span><GoLocation /></span><span>{uni.location}</span><span><FaStar /></span><span>{`${uni.stars} (${uni.totalReviews})`}</span></p>
            </div>
        </div>
        <div className="text-md ">
            <p>{uni.description}</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-full ">
          <img className="h-full object-cover rounded-lg" src={uni.image} alt="" /></div>
        <button>Compare</button>
      </div>
    </div>
  )
}
