import EducationResume from "./EducationResume";
import SkillsResume from "./SkillsResume";
import ExperienceResume from "./ExperienceResume";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";

export default function MainResume({ data }) {
  return (
    <div className="resumePreview mx-auto  text-white">
      <div className="resumeTop ">
        <header className="max-h-52 bg-blue-500 p-12 ">
          <h1 className=" p-3 text-center text-5xl font-bold">{data.name}</h1>
          <div className="iconContainer name flex justify-between p-5 text-xl ">
            <div className="email">
              <Icon path={mdiEmail} size={1} className="inline" />
              <span className="ml-1">{data.email}</span>
            </div>
            <div className="phone">
              <Icon path={mdiPhone} size={1} className="inline" />
              <span className="ml-1">{data.phone}</span>
            </div>
            <div className="location">
              <Icon path={mdiMapMarker} size={1} className=" inline" />
              <span className="ml-1">{data.address}</span>
            </div>
          </div>
        </header>
      </div>
      <div className="resumeBottom ml-11 p-4">
        <h2 className="my-5 text-4xl font-bold">Experience</h2>
        <ExperienceResume data={data}></ExperienceResume>
        <h2 className="my-5 text-4xl font-bold">Education</h2>
        <EducationResume data={data}></EducationResume>
        <SkillsResume></SkillsResume>
      </div>
    </div>
  );
}
