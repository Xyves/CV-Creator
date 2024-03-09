import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight, mdiDelete, mdiPlus } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Skills({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(false);
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
              <li>
                <input
                  type="text"
                  placeholder="Skill"
                  onChange={(e) => onInputChange("skill", e.target.value)}
                />
                <Icon
                  path={mdiDelete}
                  size={1.5}
                  className="ml-1 inline text-white"
                />
              </li>
            </ul>
            <div className="button-container w-s mx-1 flex justify-between">
              <Icon
                path={mdiPlus}
                className=" -pr ml-auto text-blue-600"
                size={2.5}
              />
            </div>
          </form>
        </>
      )}
    </section>
  );
}
function Skill({ name }) {
  return (
    <div className="skill bg-red-600">
      <h3>{name}</h3>
    </div>
  );
}
