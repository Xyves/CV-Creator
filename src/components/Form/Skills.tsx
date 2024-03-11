import ReactDOM from "react-dom";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight, mdiDelete, mdiPlus } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

interface SkillItem {
  id: number;
  skillName: string;
}

export default function Skills({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const [skillList, setSkillList] = useState([]);
  const [newSkillName, setNewSkillName] = useState<string>("");

  const deleteSkill = (id) => {
    setSkillList(skillList.filter((skill) => skill.id !== id));
  };

  function createSkill() {
    const existingSkillIndex = skillList.findIndex(
      (skill) => skill.id === skillList.length + 1
    );

    if (existingSkillIndex !== -1) {
      // If the skill with the same ID exists, update its name
      const updatedSkillList = [...skillList];
      updatedSkillList[existingSkillIndex].name = newSkillName;
      setSkillList(updatedSkillList);
    } else {
      // If the skill with the same ID doesn't exist, add it to the list
      const newSkillItem = { id: skillList.length + 1, name: newSkillName };
      setSkillList([...skillList, newSkillItem]);
    }
  }
  return (
    <section
      className="sectionForm"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <div className="flex items-center justify-between">
          <h1>Skills</h1>
          <Icon path={mdiMenuRight} size={2} className="text-white" />
        </div>
      ) : (
        <>
          <div className="  flex items-center justify-between">
            <h1>Skills</h1>
            <Icon
              path={mdiMenuDown}
              size={2}
              className="  inline justify-self-end text-white"
            />
          </div>
          <form action="" onClick={handleChildClick}>
            <ul id="skillsList">
              {skillList.map((skill) => (
                <Skill
                  key={skill.id}
                  skill={skill}
                  deleteSkill={deleteSkill}
                  onInputChange={(updatedSkill) =>
                    onInputChange("skill", updatedSkill)
                  }
                />
              ))}
            </ul>
            <button
              className="button-container w-s mx-1 flex justify-between"
              onClick={() => {
                handleChildClick;
                createSkill();
                console.log("Works");
              }}
              type="button"
            >
              <Icon
                path={mdiPlus}
                className=" -pr ml-auto text-blue-600"
                size={2.5}
              />
            </button>
          </form>
        </>
      )}
    </section>
  );
}
function Skill({ skill, onInputChange, deleteSkill }) {
  const handleChange = (e) => {
    const updatedSkill = { ...skill, name: e.target.value };
    onInputChange(updatedSkill);
  };

  return (
    <div className="skill ">
      <li className="mb-5 ">
        <input
          type="text"
          placeholder="Skill"
          className="py-4"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            deleteSkill(skill.id);
            console.log("w");
          }}
          type="button"
        >
          <Icon
            path={mdiDelete}
            size={1.5}
            className="ml-1 inline text-white"
          />
        </button>
      </li>
    </div>
  );
}
