import { useState } from "react";
import PersonalData from "./components/Form/PersonalData";
import Education from "./components/Form/Education";
import Experience from "./components/Form/Experience";
import Skills from "./components/Form/Skills";
import Header from "./components/Form/Header";
import MainResume from "./components/UI/MainResume";
function App() {
  const [formData, setFormData] = useState({
    name: "Franciszek Wysocki",
    email: "loremipsum@gmail.com",
    phone: "552795015",
    address: "Gdańsk",

    jobPosition: "Front End Developer",
    jobCompany: "Netflix",
    isWorking: true,
    jobStartDate: "01/2020",
    jobEndDate: "09/2022",
    jobDescription:
      "As a Mid-Level Front-End Developer, I played a pivotal role in crafting engaging and user-centric web experiences for our customers.",

    eduQuali: "Bachelor of Science",
    eduLocation: "Madrid ",
    schoolName: "University of Spain",
    startEdu: "10/19",
    endEdu: "2/23",

    jobPosition2: "Front End Developer",
    jobCompany2: "Netflix",
    isWorking2: true,
    jobStartDate2: "01/2020",
    jobEndDate2: "09/2022",
    jobDescription2:
      "As a Mid-Level Front-End Developer, I played a pivotal role in crafting engaging and user-centric web experiences for our customers.",

    eduQuali2: "Bachelor of Science",
    eduLocation2: "Madrid ",
    schoolName2: "University of Spain",
    startEdu2: "10/19",
    endEdu2: "2/23",

    skill: [],
  });
  const handleInputChange = (field, value) => {
    const updatedFormData = { ...formData };

    if (field === "skill") {
      const existingSkillIndex = updatedFormData[field].findIndex(
        (skill) => skill.id === value.id
      );
      if (existingSkillIndex !== -1) {
        // If a skill with the same ID exists, update it
        updatedFormData[field][existingSkillIndex] = value;
      } else {
        // If not, push the new skill into the array
        updatedFormData[field].push(value);
      }
    } else {
      // Update other fields as usual
      updatedFormData[field] = value;
    }
    setFormData(updatedFormData);
    console.log(formData.skill);
    console.log(formData);
  };
  return (
    <div className="container flex  min-h-full min-w-full flex-wrap ">
      <div className="sidebar  mt-7 max-w-xl  overflow-y-scroll px-10 ">
        <Header onInputChange={handleInputChange}></Header>
        <PersonalData onInputChange={handleInputChange}></PersonalData>
        <Education onInputChange={handleInputChange}></Education>
        <Experience onInputChange={handleInputChange}></Experience>
        <Skills onInputChange={handleInputChange}></Skills>
      </div>
      <main className=" asideResume align-center flex flex-grow justify-center">
        <aside className=" fixed  my-10  max-w-2xl bg-[#141616] ">
          <MainResume data={formData}></MainResume>
        </aside>
      </main>
    </div>
  );
}

export default App;
