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

  const subMaj: SubMajor[] = [
    {
      submaj: "Computer Science & Engineering",
      seats: 150,
      profs: 17,
      lects: 9,
      creds: 80,
      estlow: 2500000,
      esthigh: 2750000,
      syl: "Click Here"
    },
    {
      submaj: "Computer Science & Engineering",
      seats: 150,
      profs: 17,
      lects: 9,
      creds: 80,
      estlow: 2500000,
      esthigh: 2750000,
      syl: "Click Here"
    }
  ]

  const eca: ECA = {
    club: 26,
    clubs: ["BUET IT CLUB", "BUET Career Club", "BUET Business Club", "BUET Debating Club"]
  }

  const custom : Custom[] = [
    {
      title: "Custom Title",
      desc: "<> text </>"
    }
  ]

  return (
    <div className="flex flex-col flex-wrap justify-between">
      <UniAboutCard aboutUni={aboutUni} />
      <UniRankingCard aboutUni={aboutUni} />
      <UniAdmissionCard admissionUni={admissionUni} />
      <UniDetailsCard detailsUni={detailsUni} />
      <UniCampusInfo campusInfo={campusUni} />
      <LifeAfterGradCard afterGrad={afterGrad} />
      <UniSubMajorCard subMaj={subMaj}/>
      <UniECACard ecaopp={eca} />
      <UniCustomCard custom={custom} title="Custom 1" />
    </div>
  );
}

export default UniCatCards;
