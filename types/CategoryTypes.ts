export type AboutUni = {
    link: string;
    location: string;
    type: string;
    genre: string;
    credit: string;
    fees: number;
  };

export type AdmissionUni = {
    acceptance: number;
    examsys: string;
    selection: string;
    quota: string;
    scholarship: string;
}

export type DetailsUni = {
    website: string;
    deadline: string;
    fee: string;
    requirements: string
}

export type CampusUni = {
    setting: string;
    permanent: string;
    housing: string;
}

export type AfterGrad = {
    time: string;
    salary: number;
    ratio: string;
}

export type SubMajor = {
    submaj: string;
    seats: number;
    profs: number;
    lects: number;
    creds: number;
    estlow: number;
    esthigh: number;
    syl: string;
}

export type ECA = {
    club: number;
    clubs: string[];
}

export type Custom = {
    title: string;
    desc: string;
}

export type Reviews = {
    recommended: boolean;
    stars: number;
    from: string;
    date: string;
    review: string;
}