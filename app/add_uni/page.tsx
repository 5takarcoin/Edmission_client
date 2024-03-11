"use client";

import CheckBoxField from "@/components/Organizer/CheckBoxField";
import InputField from "@/components/Organizer/InputField";
import NumberField from "@/components/Organizer/NumberField";
import { SubMajor } from "@/types/CategoryTypes";
import { QuotaList, ScholarshipList } from "@/types/UniversityTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<null | File>(null);
  const [logo, setLogo] = useState<null | File>(null);

  const [description, setDescription] = useState("");

  // About -> No dropdown yet
  const [uniType, setUniType] = useState("Public");
  const [uniGenre, setUniGenre] = useState("Other");
  const [uniCreditSys, setUniCreditSys] = useState("Closed");
  const [uniTutionFees, setUniTutionFees] = useState(0);

  // Rankings ->
  const [uniQSPos, setUniQSPos] = useState("");
  const [uniQSRank, setUniQSRank] = useState("");
  const [uniTHEPos, setUniTHEPos] = useState("");
  const [uniTHERank, setUniTHERank] = useState("");

  // Admision Details
  const [uniAdmissionAcceptance, setUniAdmissionAcceptance] = useState(0);
  const [uniAdmissionExamSystem, setUniAdmissionExamSystem] =
    useState("No exams");
  const [uniAdmissionSelectionPro, setUniAdmissionSelectionPro] = useState("");
  const [uniAdmissionQuota, setUniAdmissionQuota] = useState(false);
  const [uniAdmissionScholarship, setUniAdmissionScholarship] = useState(false);

  // Application Details
  const [uniApplicationWebsite, setUniApplicationWebsite] = useState("");
  const [uniApplicationDeadline, setUniApplicationDeadline] = useState("");
  const [uniApplicationFees, setUniApplicationFees] = useState("");
  const [uniApplicationRequirements, setUniApplicationRequirements] =
    useState("");

  // Subject and Majors
  const [uniSubAndMajors, setUniSubAndMajors] = useState([] as SubMajor[]);

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
  const [uniQuotaList, seUniQuotaList] = useState([] as QuotaList[]);

  const [uniQuotaName, setUniQuotaName] = useState("");
  const [uniQuotaRequirements, setUniQuotaRequirements] = useState("");
  const [uniQuotaDetails, setUniQuotaDetails] = useState("");

  // Scholarship List
  const [uniScholarshipList, seUniScholarshipList] = useState(
    [] as ScholarshipList[]
  );

  const [uniScholarshipName, setUniScholarshipName] = useState("");
  const [uniScholarshipAmount, setUniScholarshipAmount] = useState(0);
  const [uniScholarshipYears, setUniScholarshipYears] = useState(0);
  const [uniScholarshipRequirements, setUniScholarshipRequirements] =
    useState("");
  const [uniScholarshipDetails, setUniScholarshipDetails] = useState("");

  // Campus Info
  const [uniCampusType, setUniCampusType] = useState("Urban");
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
    console.log(formData);
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

    // formData.append("reviews", JSON.stringify([]))

    if (image) formData.append("image", image);
    if (logo) formData.append("logo", logo);
    console.log("No Problem");
    console.log(formData);

    const url = "http://localhost:5050/api/unis/add";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    if (response.status === 201) {
      router.push(`/university/${identifier}/update`);
      console.log(response);
    }
  };

  return (
    // <div className="flex text-ed-text items-center justify-center min-h-[600px]">
    <div className="flex text-ed-text">
      {/* <div className="flex-col bg-ed-white p-8 w-11/12 rounded-xl"> */}
      <div className="w-full">
        <h1 className="block text-2xl mb-8 font-bold">Add University</h1>
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
                <p>No image selected</p>
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
                <p>No logo selected</p>
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
          {/* 
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
