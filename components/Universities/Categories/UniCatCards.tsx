import { FaStar } from "react-icons/fa";
import UniCatCard from "./UniCatCard";
import UniAboutCard from "./UniAboutCard";
import { AboutUni, AdmissionUni, AfterGrad, DetailsUni, CampusUni } from "@/types/CategoryTypes";
import UniRankingCard from "./UniRankingCard";
import UniAdmissionCard from "./UniAdmissionCard";
import UniDetailsCard from "./UniDetailsCard";
import LifeAfterGradCard from "./LifeAfterGradCard";
import UniCampusInfo from "./UniCampusInfoCard";

function UniCatCards() {

  const aboutUni: AboutUni = {
    link: "www.buet.ac.bd",
    location: "Keranigonj, Dhaka - 1000, Bangladesh",
    type: "Public",
    genre: "Engineering",
    credit: "Closed",
    fees: 20000
  }

  const admissionUni: AdmissionUni = {
    acceptance: 4,
    examsys: "Autonomous",
    selection: "Shortlist > Preliminary Exam > Written Exam",
    quota: "Yes",
    scholarship: "Available"
  }

  const detailsUni: DetailsUni = {
    website: "www.buet.ac.bd/ug_admissions",
    deadline: "10/08/2023",
    fee: "KA - Preliminary 400 + Main 600 and KHA - Preliminary 400 + Main 800",
    requirements: "GPA 5, PCM 560+"
  }

  const afterGrad: AfterGrad = {
    time: "4 Years",
    salary: 37500,
    ratio: "1000:979"
  }

  const campusUni: CampusUni = {
    setting: "Urban",
    permanent: "Yes",
    housing: "Yes"
  }

  return (
    <div className="flex flex-col flex-wrap justify-between">
      <UniAboutCard aboutUni={aboutUni} />
      <UniRankingCard aboutUni={aboutUni} />
      <UniAdmissionCard admissionUni={admissionUni} />
      <UniDetailsCard detailsUni={detailsUni} />
      <UniCampusInfo campusInfo={campusUni} />
      <LifeAfterGradCard afterGrad={afterGrad} />
    </div>
  );
}

export default UniCatCards;
