import { useState } from "react";
import PersonalData from "./components/Form/PersonalData";
import Education from "./components/Form/Education";
import Experience from "./components/Form/Experience";
import Skills from "./components/Form/Skills";
import Header from "./components/UI/Header";
import MainResume from "./components/UI/MainResume";
function App() {
  const [formData, setFormData] = useState({
    name: "Franciszek Wysocki",
    email: "pashabiceps@gmail.com",
    phone: "552795015",
    address: "Olsztyn",
    jobPosition: "Front End Developer",
    jobCompany: "Netflix",
    jobAddress: "Warsaw",
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
  });
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <div className="container flex min-h-full min-w-full flex-wrap">
      <div className="sidebar mx-10 max-w-xl bg-red-500">
        <Header onInputChange={handleInputChange}></Header>
        <PersonalData onInputChange={handleInputChange}></PersonalData>
        <Education onInputChange={handleInputChange}></Education>
        <Experience onInputChange={handleInputChange}></Experience>
        <Skills onInputChange={handleInputChange}></Skills>
      </div>
      <main className=" asideResume align-center flex flex-grow justify-center bg-red-500">
        <aside className=" fixed  my-10  w-1/2 bg-[#141616] ">
          <MainResume data={formData}></MainResume>
        </aside>
      </main>
    </div>
  );
}

export default App;
