import { FaStar } from "react-icons/fa";
import UniCatCard from "./UniCatCard";
import UniAboutCard from "./UniAboutCard";
import { AboutUni, AdmissionUni, AfterGrad, DetailsUni, CampusUni, SubMajor, ECA, Custom } from "@/types/CategoryTypes";
import UniRankingCard from "./UniRankingCard";
import UniAdmissionCard from "./UniAdmissionCard";
import UniDetailsCard from "./UniDetailsCard";
import LifeAfterGradCard from "./LifeAfterGradCard";
import UniCampusInfo from "./UniCampusInfoCard";
import UniSubMajorCard from "./UniSubjectMajorCard";
import UniECACard from "./UniECACard";
import UniCustomCard from "./UniCustomCard";
import { Ranking, Rankings, University } from "@/types/UniversityTypes";

function UniCatCards({ uni }: { uni: University }) {

  const aboutUni: AboutUni = {
    link: uni.about.website,
    location: uni.about.location,
    type: uni.about.unitype,
    genre: uni.about.unigenre,
    credit: uni.about.creditsystem,
    fees: uni.about.tutionfee
  }

  const admissionUni: AdmissionUni = {
    acceptance: uni.admission_details.acceptancerate,
    examsys: uni.admission_details.examsystem,
    selection: uni.admission_details.selectionprocedure,
    quota: uni.admission_details.quota.toString(),
    scholarship: uni.admission_details.scholarship
  }

  const detailsUni: DetailsUni = {
    website: uni.application_details.website,
    deadline: uni.application_details.deadline,
    fee: uni.application_details.fee,
    requirements: uni.application_details.requirements
  }

  const afterGrad: AfterGrad = {
    time: uni.life_after_graduation.gradtime.toString(),
    salary: uni.life_after_graduation.salary,
    ratio: uni.life_after_graduation.employment
  }

  const campusUni: CampusUni = {
    setting: uni.campus_info.campus,
    permanent: uni.campus_info.permanent.toString(),
    housing: uni.campus_info.housing.toString()
  }

  const subMaj: SubMajor[] = uni.subject_majors;

  const eca: ECA = {
    club: uni.eca_opportunity.total_clubs,
    clubs: uni.eca_opportunity.clubs
  }

  const rankings: Rankings = uni.rankings;
  // const custom : Custom[] = [
  //   {
  //     title: "Custom Title",
  //     desc: "<> text </>"
  //   }
  // ]

  return (
    <div className="flex flex-col flex-wrap justify-between">
      <UniAboutCard aboutUni={aboutUni} />
      <UniRankingCard rankings={rankings}/>
      <UniAdmissionCard admissionUni={admissionUni} />
      <UniDetailsCard detailsUni={detailsUni} />
      <UniCampusInfo campusInfo={campusUni} />
      <LifeAfterGradCard afterGrad={afterGrad} />
      <UniSubMajorCard subMaj={subMaj}/>
      <UniECACard ecaopp={eca} />
      {/* <UniCustomCard custom={custom} title="Custom 1" /> */}
    </div>
  );
}

export default UniCatCards;
