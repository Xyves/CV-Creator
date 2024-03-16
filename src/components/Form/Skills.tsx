import { Icon } from "@mdi/react";
import {
  mdiMenuDown,
  mdiMenuRight,
  mdiDelete,
  mdiPlus,
  mdiDeleteForever,
} from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Skills({
  onInputChange,
  skill,
  onDeleteAllSkills,
}: {
  onInputChange: any;
  skill: any;
  onDeleteAllSkills: any;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [skillList, setSkillList] = useState(skill || []);
  const [newSkillName, setNewSkillName] = useState<string>("");
  const onDeleteSkill = (id) => {
    setSkillList(skillList.filter((skill) => skill.id !== id));
  };
  const handleDeleteAllSkills = () => {
    setSkillList([]);
    onDeleteAllSkills(); //  update formData
  };

  function createSkill() {
    const existingSkillIndex = skillList.findIndex(
      (skill) => skill.id === skillList.length + 1
    );
    if (existingSkillIndex !== -1) {
      // Skill with id exists:
      const updatedSkillList = [...skillList];
      updatedSkillList[existingSkillIndex].name = newSkillName;
      setSkillList(updatedSkillList);
    } else {
      // Skill with id doesn't exist
      const newSkillItem = { id: skillList.length + 1, name: newSkillName };
      setSkillList([...skillList, newSkillItem]);
    }
  }
  return (
    <section
      className="sectionForm border-[1px] border-solid border-white"
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
                  onDelete={onDeleteSkill}
                  onInputChange={(updatedSkill) =>
                    onInputChange("skill", updatedSkill)
                  }
                />
              ))}
            </ul>
            <div className="button-container  w-s mx-1 flex justify-around">
              <button
                className="  "
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
              <button
                className="w-s mx-1 mr-2"
                onClick={() => {
                  handleDeleteAllSkills();
                }}
                type="button"
              >
                <Icon path={mdiDeleteForever} size={2.5} />
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
export function Skill({ skill, onInputChange, onDelete }) {
  const handleChange = (e) => {
    const updatedSkill = { ...skill, name: e.target.value };
    onInputChange(updatedSkill);
  };

  const handleDelete = () => {
    onDelete(skill.id);
  };
  return (
    <div className="skill ">
      <li className="mb-5">
        <input
          type="text"
          placeholder="Skill"
          className="py-4"
          onChange={handleChange}
        />
        <button onClick={() => handleDelete()} type="button">
          {/* <Icon
            path={mdiDelete}
            size={1.5}
            className="ml-1 inline text-white"
          /> */}
        </button>
      </li>
    </div>
  );
}
