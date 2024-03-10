import CheckBoxField from "@/components/Organizer/CheckBoxField";
import InputField from "@/components/Organizer/InputField";
import NumberField from "@/components/Organizer/NumberField";
import { SubMajor } from "@/types/CategoryTypes";
import {
  QuotaList,
  Ranking,
  ScholarshipList,
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
  const [uniCreditSys, setUniCreditSys] = useState(uni.about.creditsystem as string);
  const [uniTutionFees, setUniTutionFees] = useState(uni.about.tutionfee);

  // Rankings ->
  const ranks = uni.rankings;
  const [uniQSPos, setUniQSPos] = useState(ranks.qs[0].position);
  const [uniQSRank, setUniQSRank] = useState(ranks.qs[0].ranking);
  const [uniTHEPos, setUniTHEPos] = useState(ranks.the[0].position);
  const [uniTHERank, setUniTHERank] = useState(ranks.the[0].ranking);

  // Admision Details
  const [uniAdmissionAcceptance, setUniAdmissionAcceptance] = useState(uni.admission_details.acceptancerate);
  const [uniAdmissionExamSystem, setUniAdmissionExamSystem] = useState(uni.admission_details.examsystem as string);
  const [uniAdmissionSelectionPro, setUniAdmissionSelectionPro] = useState(uni.admission_details.selectionprocedure);
  const [uniAdmissionQuota, setUniAdmissionQuota] = useState(uni.admission_details.quota);
  const [uniAdmissionScholarship, setUniAdmissionScholarship] = useState(uni.admission_details.scholarship);

  // Application Details
  const [uniApplicationWebsite, setUniApplicationWebsite] = useState(uni.application_details.website);
  const [uniApplicationDeadline, setUniApplicationDeadline] = useState(uni.application_details.deadline);
  const [uniApplicationFees, setUniApplicationFees] = useState(uni.application_details.fee);
  const [uniApplicationRequirements, setUniApplicationRequirements] =
    useState(uni.application_details.requirements);

  // Subject and Majors
  const [uniSubAndMajors, setUniSubAndMajors] = useState(uni.subject_majors);
 
  const [showOneSubMaj, setShowOneSubMaj] = useState(false)

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
  const oneQuota = {} as QuotaList;
  if (uniQuotaList.length > 0) uniQuotaList[0];

  const [uniQuotaName, setUniQuotaName] = useState(oneQuota.name);
  const [uniQuotaRequirements, setUniQuotaRequirements] = useState(oneQuota.requirements);
  const [uniQuotaDetails, setUniQuotaDetails] = useState(oneQuota.details);

  // Scholarship List
  const [uniScholarshipList, setUniScholarshipList] = useState(
    [] as ScholarshipList[]
  );

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

    formData.append("rankings[qs][position]", uniQSPos);
    formData.append("rankings[qs][ranking]", uniQSRank);
    formData.append("rankings[the][position]", uniTHEPos);
    formData.append("rankings[the][ranking]", uniTHERank);

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

    // Subject And Majors
    formData.append("subject_majors", JSON.stringify(uniSubAndMajors))
    // Quota List
    // Scholarship List

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
    console.log("Kemon aso tomra?")
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

          <InputField
            id="add_uni_uniQSPos"
            value={uniQSPos}
            setValue={setUniQSPos}
          >
            QS Position
          </InputField>
          <InputField
            id="add_uni_uniQSRank"
            value={uniQSRank}
            setValue={setUniQSRank}
          >
            QS Rank
          </InputField>
          <InputField
            id="add_uni_uniTHEPos"
            value={uniTHEPos}
            setValue={setUniTHEPos}
          >
            THE Position
          </InputField>
          <InputField
            id="add_uni_uniTHERank"
            value={uniTHERank}
            setValue={setUniTHERank}
          >
            THE Rank
          </InputField>
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
            return <div key={"update_uni_"+i}>
              <p>{sumbaj.submaj}</p>
            </div>
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
              <button onClick={() => {
                setShowOneSubMaj(false);
                const oneSubMaj : SubMajor = {
                  submaj: uniSubAndMajSubMaj,
                  seats:  uniSubAndMajSeats,
                  profs: uniSubAndMajProfs,
                  lects: uniSubAndMajLects,
                  creds: uniSubAndMajCreds,
                  estlow: uniSubAndMajEstLow,
                  esthigh: uniSubAndMajEstHigh,
                  syl: uniSubAndMajSyllabus
                }
                setUniSubAndMajors([...uniSubAndMajors, oneSubMaj])
                console.log("Sub sub subusbu bsubsu")
                console.log(JSON.stringify(uniSubAndMajors))

                setUniSubAndMajSubMaj("");
                setUniSubAndMajSeats(0);
                setUniSubAndMajProfs(0);
                setUniSubAndMajLects(0);
                setUniSubAndMajCreds(0);
                setUniSubAndMajEstLow(0);
                setUniSubAndMajEstHigh(0);
                setUniSubAndMajSyllabus("");

              }}>Add</button>
                </div>
              )}
              <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
                Quota
              </h3>

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

              <h3 className="font-bold text-xl w-full border-t pt-8 border-ed-white my-4">
                Scholarships
              </h3>

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

          <NumberField
            id="add_uni_uniECATotal"
            value={uniECATotal}
            setValue={setUniECATotal}
          >
            Total ECA Opportunities
          </NumberField>
          <InputField
            id="add_uni_uniECAClubs"
            value={uniECAOneClub}
            setValue={setUniECAOneClub}
          >
            ECA Clubs
          </InputField>
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

          {/*           
          <div className="flex flex-col gap-2 pb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5"
                value="Student"
                checked={selectedLoginType === "Student"}
                onChange={handleRadioChange}
              />
              <span className="ml-2">Student</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5"
                value="University"
                checked={selectedLoginType === "University"}
                onChange={handleRadioChange}
              />
              <span className="ml-2">University</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5"
                value="Admin"
                checked={selectedLoginType === "Admin"}
                onChange={handleRadioChange}
              />
              <span className="ml-2">Admin</span>
            </label>
          </div> */}
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
