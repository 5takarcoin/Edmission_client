// export type University = {
//   name: string;
//   location: string;
//   description: string;
//   image: string;
//   logo: string;
//   genre: string;
//   stars: number;
//   totalReviews: number;
//   sponsored: boolean;
//   identifier: string;
// };

export interface Review {
  // Define properties of the review
  // For example:
  title: string;
  content: string;
  rating: number;
  user: string; // Reference to a user
  university: University; // Reference to a university
}

export interface Subnmajor {
  submaj: string;
  seats: number;
  profs: number;
  lects: number;
  creds: number;
  estlow: number;
  esthigh: number;
  syl: string;
}

export interface ScholarshipList {
  name: string;
  amount: number;
  noyears: number;
  requirements: string;
  details: string;
}

export interface QuotaList {
  name: string;
  requirements: string;
  details: string;
}

export interface Ranking {
  position: string;
  ranking: string;
}

export interface Rankings {
  qs: Ranking[];
  the: Ranking[];
}

export interface About {
  website: string;
  location: string;
  unitype: "Public" | "Private" | "Other";
  unigenre: "Engineering" | "Medical" | "Other";
  creditsystem: "Open" | "Closed";
  tutionfee: number;
}

export interface AdmissionDetails {
  acceptancerate: number;
  examsystem: "Autonomus" | "No exams";
  selectionprocedure: string;
  quota: boolean;
  scholarship: string;
}

export interface ApplicationDetails {
  website: string;
  deadline: string;
  fee: string;
  requirements: string;
}

export interface CampusInfo {
  campus: "Urban" | "City?" | "Dunno";
  permanent: boolean;
  housing: boolean;
}

export interface LifeAfterGraduation {
  gradtime: number;
  salary: number;
  employment: string;
}

export interface EcaOpportunity {
  total_clubs: number;
  clubs: string[];
}

export interface University {
  _id: string;
  name: string;
  identifier: string;
  img: string;
  location: string;
  desc: string;
  about: About;
  rankings: {
    qs: Ranking[];
    the: Ranking[];
  };
  admission_details: AdmissionDetails;
  application_details: ApplicationDetails;
  subject_majors: Subnmajor[];
  quota_list: QuotaList[];
  scholarship_list: ScholarshipList[];
  campus_info: CampusInfo;
  life_after_graduation: LifeAfterGraduation;
  eca_opportunity: EcaOpportunity;
  reviews: Review[]; // Assuming it's an array of review IDs
  notable_alumni: string[]; // Assuming it's an array of alumni IDs
}
