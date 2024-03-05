import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Education() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <section
      className="education "
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <h1>Education</h1>
      ) : (
        <>
          <h1>Education</h1>
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
                  />
                </li>
                <li>
                  <label htmlFor="jobPosition">School</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your school name"
                    name="jobPosition"
                  />
                </li>
                <li>
                  <label htmlFor="">Location</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter the location"
                    name="location"
                  />
                </li>
                <li>
                  <label htmlFor="startEdu">Start </label>
                  <br />
                  <input
                    type="text"
                    placeholder="MM/YY - MM/YY"
                    name="startEdu"
                  />
                  <label htmlFor="endEdu">End </label>
                  <br />
                  <input
                    type="text"
                    placeholder="MM/YY - MM/YY"
                    name="endEdu"
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
