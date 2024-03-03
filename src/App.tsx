import { useState } from "react";
import PersonalData from "./components/Form/PersonalData";
import Education from "./components/Form/Education";
import Experience from "./components/Form/Experience";
import Skills from "./components/Form/Skills";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="sidebar max-w-sm bg-red-500">
      <PersonalData></PersonalData>
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
    </div>
  );
}

export default App;
