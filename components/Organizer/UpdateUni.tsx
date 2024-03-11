import CheckBoxField from "@/components/Organizer/CheckBoxField";
import InputField from "@/components/Organizer/InputField";
import NumberField from "@/components/Organizer/NumberField";
import { SubMajor } from "@/types/CategoryTypes";
import {
  QuotaOne,
  Ranking,
  Rankings,
  ScholarshipOne,
  Subnmajor,
  University,
} from "@/types/UniversityTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateUni({ uni }: { uni: University }) {
  const router = useRouter();

  const [name, setName] = useState(uni.name);
  const [identifier, setIdentifier] = useState(uni.identifier);
  const [location, setLocation] = useState(uni.location);
  const [image, setImage] = useState<null | File>(null);
  const [logo, setLogo] = useState<null | File>(null);

  const [description, setDescription] = useState(uni.desc);

  // About -> No dropdown yet
  const [uniType, setUniType] = useState(uni.about.unitype as string);
  const [uniGenre, setUniGenre] = useState(uni.about.unigenre as string);
  const [uniCreditSys, setUniCreditSys] = useState(
    uni.about.creditsystem as string
  );
  const [uniTutionFees, setUniTutionFees] = useState(uni.about.tutionfee);

  // Rankings ->
  const ranks = uni.rankings;
  const [showQS, setShowQS] = useState(false);
  const [showTHE, setShowTHE] = useState(false);

  const [uniQSRanks, setUniQSRanks] = useState(ranks.qs);
  const [uniTHERanks, setUniTHERanks] = useState(ranks.the);

  const [uniQSRankOne, setUniQSRankOne] = useState("");
  const [uniQSPosOne, setUniQSPosOne] = useState("");
  const [uniTHERankOne, setUniTHERankOne] = useState("");
  const [uniTHEPosOne, setUniTHEPosOne] = useState("");

  // Admision Details
  const [uniAdmissionAcceptance, setUniAdmissionAcceptance] = useState(
    uni.admission_details.acceptancerate
  );
  const [uniAdmissionExamSystem, setUniAdmissionExamSystem] = useState(
    uni.admission_details.examsystem as string
  );
  const [uniAdmissionSelectionPro, setUniAdmissionSelectionPro] = useState(
    uni.admission_details.selectionprocedure
  );
  const [uniAdmissionQuota, setUniAdmissionQuota] = useState(
    uni.admission_details.quota
  );
  const [uniAdmissionScholarship, setUniAdmissionScholarship] = useState(
    uni.admission_details.scholarship
  );

  // Application Details
  const [uniApplicationWebsite, setUniApplicationWebsite] = useState(
    uni.application_details.website
  );
  const [uniApplicationDeadline, setUniApplicationDeadline] = useState(
    uni.application_details.deadline
  );
  const [uniApplicationFees, setUniApplicationFees] = useState(
    uni.application_details.fee
  );
  const [uniApplicationRequirements, setUniApplicationRequirements] = useState(
    uni.application_details.requirements
  );

  // Subject and Majors
  const [uniSubAndMajors, setUniSubAndMajors] = useState(uni.subject_majors);

  const [showOneSubMaj, setShowOneSubMaj] = useState(false);

  const [uniSubAndMajSubMaj, setUniSubAndMajSubMaj] = useState("");
  const [uniSubAndMajSeats, setUniSubAndMajSeats] = useState(0);
  const [uniSubAndMajProfs, setUniSubAndMajProfs] = useState(0);
  const [uniSubAndMajLects, setUniSubAndMajLects] = useState(0);
  const [uniSubAndMajCreds, setUniSubAndMajCreds] = useState(0);
  const [uniSubAndMajEstLow, setUniSubAndMajEstLow] = useState(0);
  const [uniSubAndMajEstHigh, setUniSubAndMajEstHigh] = useState(0);
  const [uniSubAndMajSyllabus, setUniSubAndMajSyllabus] = useState("");

  // Quota List
  const [uniQuotaList, setUniQuotaList] = useState(uni.quota_list);
  const [showUniQuotaAdd, setShowUniQuotaAdd] = useState(false);

  const [uniQuotaName, setUniQuotaName] = useState("");
  const [uniQuotaRequirements, setUniQuotaRequirements] = useState("");
  const [uniQuotaDetails, setUniQuotaDetails] = useState("");

  // Scholarship List
  const [uniScholarshipList, setUniScholarshipList] = useState(
    uni.scholarship_list
  );
  const [showUniScholarshipAdd, setShowUniScholarshipAdd] = useState(false);

  const [uniScholarshipName, setUniScholarshipName] = useState("");
  const [uniScholarshipAmount, setUniScholarshipAmount] = useState(0);
  const [uniScholarshipYears, setUniScholarshipYears] = useState(0);
  const [uniScholarshipRequirements, setUniScholarshipRequirements] =
    useState("");
  const [uniScholarshipDetails, setUniScholarshipDetails] = useState("");

  // Campus Info
  const [uniCampusType, setUniCampusType] = useState("");
  const [uniCampusPermanent, setUniCampusPermanent] = useState(false);
  const [uniCampusHousing, setUniCampusHousing] = useState(false);

  // Life After Graduation
  const [uniLifeAfterGradTime, setUniLifeAfterGradTime] = useState(0);
  const [uniLifeAfterGradSalary, setUniLifeAfterGradSalary] = useState(0);
  const [uniLifeAfterGradEmployment, setUniLifeAfterGradEmployment] =
    useState("");

  // ECA Opportunities
  const [uniECATotal, setUniECATotal] = useState(0);
  const [uniECAClubs, setUniECAClubs] = useState([] as String[]);

  const [showOneECA, setShowOneECA] = useState(false);
  const [uniECAOneClub, setUniECAOneClub] = useState("");

  // Notable Alumnis
  const [uniAlumnis, setUniAlumnis] = useState([] as String[]);
  const [uniECAOneAlumni, setUniECAOneAlumni] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_id", uni._id);
    formData.append("name", name);
    formData.append("identifier", identifier);
    formData.append("location", location);
    formData.append("desc", description);

    formData.append("about[unitype]", uniType);
    formData.append("about[unigenre]", uniGenre);
    formData.append("about[creditsystem]", uniCreditSys);
    formData.append("about[tutionfee]", uniTutionFees.toString());

    formData.append("rankings[qs]", JSON.stringify(uniQSRanks));
    formData.append("rankings[the]", JSON.stringify(uniTHERanks));

    formData.append(
      "admission_details[acceptancerate]",
      uniAdmissionAcceptance.toString()
    );
    formData.append("admission_details[examsystem]", uniAdmissionExamSystem);
    formData.append(
      "admission_details[selectionprocedure]",
      uniAdmissionSelectionPro
    );
    formData.append("admission_details[quota]", uniAdmissionQuota.toString());
    formData.append(
      "admission_details[scholarship]",
      uniAdmissionScholarship.toString()
    );

    formData.append("application_details[website]", uniApplicationWebsite);
    formData.append("application_details[deadline]", uniApplicationDeadline);
    formData.append("application_details[fee]", uniApplicationFees);
    formData.append(
      "application_details[requirements]",
      uniApplicationRequirements
    );

    formData.append("subject_majors", JSON.stringify(uniSubAndMajors));
    formData.append("quota_list", JSON.stringify(uniQuotaList));
    formData.append("scholarship_list", JSON.stringify(uniScholarshipList));

    formData.append("campus_info[campus]", uniCampusType);
    formData.append("campus_info[permanent]", uniCampusPermanent.toString());
    formData.append("campus_info[housing]", uniCampusHousing.toString());

    formData.append(
      "life_after_graduation[gradtime]",
      uniLifeAfterGradTime.toString()
    );
    formData.append(
      "life_after_graduation[salary]",
      uniLifeAfterGradSalary.toString()
    );
    formData.append(
      "life_after_graduation[employment]",
      uniLifeAfterGradEmployment
    );

    formData.append("eca_opportunity[total_clubs]", uniECATotal.toString());
    formData.append("eca_opportunity[gradtime]", uniECAClubs.toString());

    if (image) formData.append("image", image);
    if (logo) formData.append("logo", logo);
    console.log("Kemon aso tomra?");
    // console.log(...formData);

    const url = "http://localhost:5050/api/unis/" + uni.identifier;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    if (response.status === 201) {
      router.push(`/university/${uni.identifier}`);
      console.log(response);
    }
  };

  return (
    // <div className="flex text-ed-text items-center justify-center min-h-[600px]">
    //   <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl">
    // <div className="flex text-ed-text items-center justify-center min-h-[600px]">
    <div className="flex text-ed-text">
      {/* <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl"> */}
      <div className="w-full">
        <h1 className="block text-2xl mb-8 font-bold">Edit University</h1>
        <form className="" onSubmit={handleSubmit}>
          <InputField id="add_uni_name" value={name} setValue={setName}>
            Name
          </InputField>
          <InputField
            id="add_uni_identifier"
            value={identifier}
            setValue={setIdentifier}
          >
            Identifier
          </InputField>
          <InputField
            id="add_uni_location"
            value={location}
            setValue={setLocation}
          >
            Location
          </InputField>
          <div className="mb-5">
            <div className="my-4">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="" />
              ) : (
                <img src={uni.img} alt="" />
              )}
            </div>
            <label
              htmlFor="image"
              className="mb-2 text-ed-text text-sm bg-white rounded-md border border-ed-sec font-medium h-10 w-full flex justify-center  items-center text-center"
            >
              <span>{image ? "Change Image" : "Choose your Image"}</span>
            </label>
            <input
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              type="file"
              id="image"
              className="hidden"
            />
          </div>
          <div className="mb-5">
            <div className="my-4">
              {logo ? (
                <img src={URL.createObjectURL(logo)} alt="" />
              ) : (
                <img src={uni.logo} alt="" />
              )}
            </div>
            <label
              htmlFor="logo"
              className="mb-2 text-ed-text text-sm bg-white rounded-md border border-ed-sec font-medium h-10 w-full flex justify-center  items-center text-center"
            >
              <span>{logo ? "Change Logo" : "Choose your Logo"}</span>
            </label>
            <input
              onChange={(e) =>
                setLogo(e.target.files ? e.target.files[0] : null)
              }
              type="file"
              id="logo"
              className="hidden"
            />
          </div>
          <InputField
            id="add_uni_description"
            value={description}
            setValue={setDescription}
          >
            Description
          </InputField>
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            About
          </h3>
          <InputField
            id="add_uni_uniType"
            value={uniType}
            setValue={setUniType}
          >
            Type
          </InputField>
          <InputField
            id="add_uni_uniGenre"
            value={uniGenre}
            setValue={setUniGenre}
          >
            Genre
          </InputField>
          <InputField
            id="add_uni_uniCreditSys"
            value={uniCreditSys}
            setValue={setUniCreditSys}
          >
            Credit System
          </InputField>
          <NumberField
            id="add_uni_uniTutionFees"
            value={uniTutionFees}
            setValue={setUniTutionFees}
          >
            Tuition Fees
          </NumberField>

          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Ranking
          </h3>
          <h3 className="font-bold text-md py-2">QS</h3>
          {uniQSRanks.map((rank, i) => {
            return (
              <div className="flex items-center" key={"update_uni_rankqs" + i}>
                <p className="w-8/12">
                  {rank.ranking} {rank.position}
                </p>
                <button
                  onClick={() => {
                    const temp = uniQSRanks;
                    let array = temp.filter((item) => item !== rank);
                    setUniQSRanks(array);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
          {!showQS && <button onClick={() => setShowQS(true)}>Add +</button>}
          {showQS && (
            <div>
              <InputField
                id="add_uni_uniQSPos"
                value={uniQSPosOne}
                setValue={setUniQSPosOne}
              >
                QS Position
              </InputField>
              <InputField
                id="add_uni_uniQSRank"
                value={uniQSRankOne}
                setValue={setUniQSRankOne}
              >
                QS Rank
              </InputField>
              <button
                onClick={() => {
                  setShowQS(false);
                  const oneRank: Ranking = {
                    position: uniQSPosOne,
                    ranking: uniQSRankOne,
                  };
                  setUniQSRanks([...uniQSRanks, oneRank]);

                  setUniQSRankOne("");
                  setUniQSPosOne("");
                }}
              >
                Add
              </button>
            </div>
          )}

          <h3 className="font-bold text-md py-2">THE</h3>
          {uniTHERanks.map((rank, i) => {
            return (
              <div className="flex items-center" key={"update_uni_rankthe" + i}>
                <p className="w-8/12">
                  {rank.ranking} {rank.position}
                </p>
                <button
                  onClick={() => {
                    const temp = uniTHERanks;
                    let array = temp.filter((item) => item !== rank);
                    setUniTHERanks(array);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
          {!showTHE && <button onClick={() => setShowTHE(true)}>Add +</button>}
          {showTHE && (
            <div>
              <InputField
                id="add_uni_uniTHEPos"
                value={uniTHEPosOne}
                setValue={setUniTHEPosOne}
              >
                THE Position
              </InputField>
              <InputField
                id="add_uni_uniTHERank"
                value={uniTHERankOne}
                setValue={setUniTHERankOne}
              >
                THE Rank
              </InputField>
              <button
                onClick={() => {
                  setShowTHE(false);
                  const oneRank: Ranking = {
                    position: uniTHEPosOne,
                    ranking: uniTHERankOne,
                  };
                  setUniTHERanks([...uniTHERanks, oneRank]);

                  setUniTHERankOne("");
                  setUniTHEPosOne("");
                }}
              >
                Add
              </button>
            </div>
          )}
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Admission
          </h3>

          <NumberField
            id="add_uni_uniAdmissionAcceptance"
            value={uniAdmissionAcceptance}
            setValue={setUniAdmissionAcceptance}
          >
            Admission Acceptance
          </NumberField>
          <InputField
            id="add_uni_uniAdmissionExamSystem"
            value={uniAdmissionExamSystem}
            setValue={setUniAdmissionExamSystem}
          >
            Admission Exam System
          </InputField>
          <InputField
            id="add_uni_uniAdmissionSelectionPro"
            value={uniAdmissionSelectionPro}
            setValue={setUniAdmissionSelectionPro}
          >
            Admission Selection Process
          </InputField>

          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Application
          </h3>

          <InputField
            id="add_uni_uniApplicationWebsite"
            value={uniApplicationWebsite}
            setValue={setUniApplicationWebsite}
          >
            Application Website
          </InputField>
          <InputField
            id="add_uni_uniApplicationDeadline"
            value={uniApplicationDeadline}
            setValue={setUniApplicationDeadline}
          >
            Application Deadline
          </InputField>
          <InputField
            id="add_uni_uniApplicationFees"
            value={uniApplicationFees}
            setValue={setUniApplicationFees}
          >
            Application Fees
          </InputField>
          <InputField
            id="add_uni_uniApplicationRequirements"
            value={uniApplicationRequirements}
            setValue={setUniApplicationRequirements}
          >
            Application Requirements
          </InputField>
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Subject and Majors
          </h3>
          {uniSubAndMajors.map((sumbaj, i) => {
            return (
              <div className="flex items-center" key={"update_uni_" + i}>
                <p className="w-8/12">{sumbaj.submaj}</p>
                <button
                  onClick={() => {
                    const temp = uniSubAndMajors;
                    let array = temp.filter((item) => item !== sumbaj);
                    setUniSubAndMajors(array);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
          {!showOneSubMaj && (
            <button onClick={() => setShowOneSubMaj(true)}>Add +</button>
          )}
          {showOneSubMaj && (
            <div>
              <InputField
                id="add_uni_uniSubAndMajSubMaj"
                value={uniSubAndMajSubMaj}
                setValue={setUniSubAndMajSubMaj}
              >
                Subject and Major
              </InputField>
              <NumberField
                id="add_uni_uniSubAndMajSeats"
                value={uniSubAndMajSeats}
                setValue={setUniSubAndMajSeats}
              >
                Seats
              </NumberField>
              <NumberField
                id="add_uni_uniSubAndMajProfs"
                value={uniSubAndMajProfs}
                setValue={setUniSubAndMajProfs}
              >
                Professors
              </NumberField>
              <NumberField
                id="add_uni_uniSubAndMajLects"
                value={uniSubAndMajLects}
                setValue={setUniSubAndMajLects}
              >
                Lecturers
              </NumberField>
              <NumberField
                id="add_uni_uniSubAndMajCreds"
                value={uniSubAndMajCreds}
                setValue={setUniSubAndMajCreds}
              >
                Credits
              </NumberField>
              <NumberField
                id="add_uni_uniSubAndMajEstLow"
                value={uniSubAndMajEstLow}
                setValue={setUniSubAndMajEstLow}
              >
                Estimated Low
              </NumberField>
              <NumberField
                id="add_uni_uniSubAndMajEstHigh"
                value={uniSubAndMajEstHigh}
                setValue={setUniSubAndMajEstHigh}
              >
                Estimated High
              </NumberField>
              <InputField
                id="add_uni_uniSubAndMajSyllabus"
                value={uniSubAndMajSyllabus}
                setValue={setUniSubAndMajSyllabus}
              >
                Syllabus
              </InputField>
              <button
                onClick={() => {
                  setShowOneSubMaj(false);
                  const oneSubMaj: SubMajor = {
                    submaj: uniSubAndMajSubMaj,
                    seats: uniSubAndMajSeats,
                    profs: uniSubAndMajProfs,
                    lects: uniSubAndMajLects,
                    creds: uniSubAndMajCreds,
                    estlow: uniSubAndMajEstLow,
                    esthigh: uniSubAndMajEstHigh,
                    syl: uniSubAndMajSyllabus,
                  };
                  setUniSubAndMajors([...uniSubAndMajors, oneSubMaj]);

                  setUniSubAndMajSubMaj("");
                  setUniSubAndMajSeats(0);
                  setUniSubAndMajProfs(0);
                  setUniSubAndMajLects(0);
                  setUniSubAndMajCreds(0);
                  setUniSubAndMajEstLow(0);
                  setUniSubAndMajEstHigh(0);
                  setUniSubAndMajSyllabus("");
                }}
              >
                Add
              </button>
            </div>
          )}
          <div className="border-t border-ed-white my-4"></div>
          <CheckBoxField
            field="Quota"
            isChecked={uniAdmissionQuota}
            setIsChecked={setUniAdmissionQuota}
          />
          <CheckBoxField
            field="Scholarship"
            isChecked={uniAdmissionScholarship}
            setIsChecked={setUniAdmissionScholarship}
          />
          {uniAdmissionQuota && (
            <div>
              <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
                Quota
              </h3>
              {uniQuotaList.map((quota, i) => {
                return (
                  <div className="flex items-center" key={"update_uni_" + i}>
                    <p className="w-8/12">{quota.name}</p>
                    <button
                      onClick={() => {
                        const temp = uniQuotaList;
                        let array = temp.filter((item) => item !== quota);
                        setUniQuotaList(array);
                      }}
                    >
                      -
                    </button>
                  </div>
                );
              })}

              
              {!showUniQuotaAdd && (
                <button onClick={() => setShowUniQuotaAdd(true)}>Add +</button>
              )}

              {showUniQuotaAdd && (
                <div>
                  <InputField
                    id="add_uni_uniQuotaName"
                    value={uniQuotaName}
                    setValue={setUniQuotaName}
                  >
                    Quota Name
                  </InputField>
                  <InputField
                    id="add_uni_uniQuotaRequirements"
                    value={uniQuotaRequirements}
                    setValue={setUniQuotaRequirements}
                  >
                    Quota Requirements
                  </InputField>
                  <InputField
                    id="add_uni_uniQuotaDetails"
                    value={uniQuotaDetails}
                    setValue={setUniQuotaDetails}
                  >
                    Quota Details
                  </InputField>
                  <button
                    onClick={() => {
                      setShowUniQuotaAdd(false);
                      const oneQuota: QuotaOne = {
                        name: uniQuotaName,
                        requirements: uniQuotaRequirements,
                        details: uniQuotaDetails,
                      };
                      setUniQuotaList([...uniQuotaList, oneQuota]);

                      setUniQuotaName("");
                      setUniQuotaRequirements("");
                      setUniQuotaDetails("");
                    }}
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          )}

          {uniAdmissionScholarship && (
            <div>
              <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
                Scholarships
              </h3>
              {uniScholarshipList.map((scholarship, i) => {
                return (
                  <div className="flex items-center" key={"update_uni_" + i}>
                    <p className="w-8/12">{scholarship.name}</p>
                    <button
                      onClick={() => {
                        const temp = uniScholarshipList;
                        let array = temp.filter((item) => item !== scholarship);
                        setUniScholarshipList(array);
                      }}
                    >
                      -
                    </button>
                  </div>
                );
              })}
              {!showUniScholarshipAdd && (
                <button onClick={() => setShowUniScholarshipAdd(true)}>
                  Add +
                </button>
              )}

              {showUniScholarshipAdd && (
                <div>
                  <InputField
                    id="add_uni_uniScholarshipName"
                    value={uniScholarshipName}
                    setValue={setUniScholarshipName}
                  >
                    Name
                  </InputField>
                  <NumberField
                    id="add_uni_uniScholarshipAmount"
                    value={uniScholarshipAmount}
                    setValue={setUniScholarshipAmount}
                  >
                    Amount
                  </NumberField>
                  <NumberField
                    id="add_uni_uniScholarshipYears"
                    value={uniScholarshipYears}
                    setValue={setUniScholarshipYears}
                  >
                    Years
                  </NumberField>

                  <InputField
                    id="add_uni_uniScholarshipRequirements"
                    value={uniScholarshipRequirements}
                    setValue={setUniScholarshipRequirements}
                  >
                    Requirements
                  </InputField>
                  <InputField
                    id="add_uni_uniScholarshipDetails"
                    value={uniScholarshipDetails}
                    setValue={setUniScholarshipDetails}
                  >
                    Details
                  </InputField>
                  <button
                    onClick={() => {
                      setShowUniScholarshipAdd(false);
                      const oneScholarship: ScholarshipOne = {
                        name: uniScholarshipName,
                        amount: uniScholarshipAmount,
                        noyears: uniScholarshipYears,
                        requirements: uniScholarshipRequirements,
                        details: uniScholarshipDetails,
                      };
                      setUniScholarshipList([...uniScholarshipList, oneScholarship]);

                      setUniScholarshipName("");
                      setUniScholarshipAmount(0);
                      setUniScholarshipYears(0);
                      setUniScholarshipRequirements("");
                      setUniScholarshipDetails("");
                    }}
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          )}
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Campus Type
          </h3>

          <InputField
            id="add_uni_uniCampusType"
            value={uniCampusType}
            setValue={setUniCampusType}
          >
            Campus Type
          </InputField>

          <CheckBoxField
            field="Permenant Campus"
            isChecked={uniCampusPermanent}
            setIsChecked={setUniCampusPermanent}
          />

          <CheckBoxField
            field="Housing"
            isChecked={uniCampusHousing}
            setIsChecked={setUniCampusHousing}
          />
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Life After Graduation
          </h3>

          <NumberField
            id="add_uni_uniLifeAfterGradTime"
            value={uniLifeAfterGradTime}
            setValue={setUniLifeAfterGradTime}
          >
            Time After Graduation
          </NumberField>

          <NumberField
            id="add_uni_uniLifeAfterGradSalary"
            value={uniLifeAfterGradSalary}
            setValue={setUniLifeAfterGradSalary}
          >
            Salary After Graduation
          </NumberField>
          <InputField
            id="add_uni_uniLifeAfterGradEmployment"
            value={uniLifeAfterGradEmployment}
            setValue={setUniLifeAfterGradEmployment}
          >
            Employment After Graduation
          </InputField>
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            ECA Opportunities
          </h3>
          {uniECAClubs.map((club, i) => {
            return (
              <div className="flex items-center" key={"eca_clubs" + i}>
                <p>{club}</p>
                <button
                  onClick={() => {
                    const temp = uniECAClubs;
                    let array = temp.filter((item) => item !== club);
                    setUniECAClubs(array);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}

          {/* <NumberField
            id="add_uni_uniECATotal"
            value={uniECATotal}
            setValue={setUniECATotal}
          >
            Total ECA Opportunities
          </NumberField> */}
          {!showOneECA && (
            <button onClick={() => setShowOneECA(true)}>Add +</button>
          )}
          {showOneECA && (
            <div>
              <InputField
                id="add_uni_uniOneECAClub"
                value={uniECAOneClub}
                setValue={setUniECAOneClub}
              >
                Club
              </InputField>
              <button
                onClick={() => {
                  setShowOneECA(false);
                  setUniECAClubs([...uniECAClubs, uniECAOneClub]);
                  setUniECAOneClub("");
                }}
              >
                Add
              </button>
            </div>
          )}
          <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
            Notable Alumnis
          </h3>

          <InputField
            id="add_uni_uniAlumnis"
            value={uniECAOneAlumni}
            setValue={setUniECAOneAlumni}
          >
            Notable Alumnis
          </InputField>
          <button
            type="submit"
            className="text-ed-text bg-white hover:bg-ed-sec hover:text-white border-solid border-2 border-ed-sec font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
