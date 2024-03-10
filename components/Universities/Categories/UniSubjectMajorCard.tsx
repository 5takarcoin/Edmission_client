import { SubMajor } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

function UniSubMajorCard({ subMaj }: { subMaj: SubMajor[] }) {
  return (
    <div className="min-w-[48%]">
      <div className="">
        <h3 className="text-lg font-bold p-2 pt-4">Subject & Majors</h3>
        <div className="bg-ed-card rounded-xl overflow-hidden">
          <div className="overflow-x-scroll w-full">
            <div className="min-w-[900px]">
              <p className="flex bg-ed-prim h-12">
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-3/12">
                  <span>Major/Subject</span>
                </span>
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-1/12">
                  <span>Total Seats</span>
                </span>
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-2/12">
                  <span>Professor/Lecturers</span>
                </span>
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-1/12">
                  <span>Total Credits</span>
                </span>
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-3/12">
                  <span>Estimated Cost</span>
                </span>
                <span className="text-xs text-white flex justify-center items-center h-full text-center w-2/12">
                  <span>Course Syllabus</span>
                </span>
              </p>
              {subMaj.map((sub, i) => {
                return (
                  <p key={"table" + i} className="flex bg-ed-white h-12">
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center border-r ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-3/12`}
                    >
                      <span>{sub.submaj}</span>
                    </span>
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center border-r ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-1/12`}
                    >
                      <span>{sub.seats}</span>
                    </span>
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center border-r ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-2/12`}
                    >
                      <span>
                        {sub.profs}/{sub.lects}
                      </span>
                    </span>
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center border-r ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-1/12`}
                    >
                      <span>{sub.creds}</span>
                    </span>
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center border-r ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-3/12`}
                    >
                      <span>
                        {sub.estlow} - {sub.esthigh}
                      </span>
                    </span>
                    <span
                      className={`text-xs text-ed-text flex justify-center items-center h-full text-center ${
                        i !== subMaj.length - 1 ? "border-b" : ""
                      } border-black w-2/12`}
                    >
                      <span>{sub.syl}</span>
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniSubMajorCard;
