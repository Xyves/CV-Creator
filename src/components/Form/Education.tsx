import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Education({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section
      className="education sectionForm"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <div className="flex items-center justify-between">
          <h1>Education</h1>
          <Icon path={mdiMenuRight} size={2} className="text-white" />
        </div>
      ) : (
        <>
          <div className="  flex items-center justify-between">
            <h1>Education</h1>
            <Icon
              path={mdiMenuDown}
              size={2}
              className="  inline justify-self-end text-white"
            />
          </div>
          <form action="" id="educationForm" onClick={handleChildClick}>
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="qualifications">Qualifications</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your qualifications"
                    name="qualifications"
                    onChange={(e) => onInputChange("eduQuali", e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="schoolName">School</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your school name"
                    name="schoolName"
                    onChange={(e) =>
                      onInputChange("schoolName", e.target.value)
                    }
                  />
                </li>
                <li>
                  <label htmlFor="">Location</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter the location"
                    name="location"
                    onChange={(e) =>
                      onInputChange("eduLocation", e.target.value)
                    }
                  />
                </li>
                <li className="checkBox">
                  <input
                    type="checkbox"
                    name="isWorking"
                    id=""
                    value="true"
                    checked={isChecked}
                    onChange={(e) => {
                      handleCheckboxChange();
                      onInputChange("isStudying", e.target.checked);
                    }}
                  />
                  <span> Currently studying</span>
                </li>
                <li>
                  <label htmlFor="startEdu">Start </label>
                  <br />
                  <input
                    type="month"
                    name="startEdu"
                    onChange={(e) => onInputChange("startEdu", e.target.value)}
                  />
                  <br></br>
                  {!isChecked ? (
                    <>
                      <label htmlFor="endEdu">End Date</label>
                      <br></br>
                      <input
                        type="month"
                        name="endEdu"
                        onChange={(e) =>
                          onInputChange("endEdu", e.target.value)
                        }
                      />
                    </>
                  ) : null}
                </li>
              </ul>
              <div className="button-container w-s mx-1 flex justify-between">
                <button className="reset-button bg-blue-700 p-4" type="reset">
                  Clear
                </button>
                <button
                  className="save-button mr-9 bg-blue-700 p-3"
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                >
                  Save
                </button>
              </div>
            </fieldset>
          </form>
        </>
      )}
    </section>
  );
}
