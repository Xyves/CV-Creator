import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(true);
  const addSkill = () => {
    const ul = document.querySelector("#skillsList");
    const li = document.createElement("li");
    const input = document.createElement("input");
    li.textContent = "x";
  };
  return (
    <section
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <h1>Skills</h1>
      ) : (
        <>
          <h1>Skills</h1>
          <form action="" onClick={handleChildClick}>
            <ul id="skillsList">
              <li>
                <input type="text" placeholder="Skill" />
              </li>
            </ul>
            <div className="button-container">
              <button className="clearBtn">Clear</button>
              <button
                className="addEdu"
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
