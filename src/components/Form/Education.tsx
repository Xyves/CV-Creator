import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Education({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <section
      className="education sectionForm"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <h1>Education</h1>
      ) : (
        <>
          <h1>Education</h1>
          <form action="" id="educationForm">
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
                      onInputChange("schoolLocation", e.target.value)
                    }
                  />
                </li>
                <li>
                  <label htmlFor="startEdu">Start </label>
                  <br />
                  <input
                    type="text"
                    placeholder="MM/YY - MM/YY"
                    name="startEdu"
                    onChange={(e) => onInputChange("startEdu", e.target.value)}
                  />
                  <label htmlFor="endEdu">End </label>
                  <br />
                  <input
                    type="text"
                    placeholder="MM/YY - MM/YY"
                    name="endEdu"
                    onChange={(e) => onInputChange("endEdu", e.target.value)}
                  />
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
            </fieldset>
          </form>
        </>
      )}
    </section>
  );
}
