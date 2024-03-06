import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Experience({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <section
      className="experience sectionForm"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <h1>Experience</h1>
      ) : (
        <>
          <h1>Experience</h1>
          <form action="" id="experienceForm" onClick={handleChildClick}>
            <fieldset>
              <ul>
                <li>
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) =>
                      onInputChange("jobPosition", e.target.value)
                    }
                  />
                </li>
                <li>
                  <label htmlFor="company">Company</label>
                  <br />

                  <input
                    type="text"
                    name="company"
                    onChange={(e) =>
                      onInputChange("jobCompany", e.target.value)
                    }
                  />
                </li>
                <li>
                  <label htmlFor="jobLocation">Address</label>
                  <br />

                  <input
                    type="text"
                    name="location"
                    onChange={(e) =>
                      onInputChange("jobAddress", e.target.value)
                    }
                  />
                </li>
                <li className="checkBox">
                  <input
                    type="checkbox"
                    name="isWorking"
                    id=""
                    onChange={(e) => onInputChange("isWorking", e.target.value)}
                  />
                  <span> I am currently working in this role</span>
                </li>
                <li>
                  <label htmlFor="startDate">Start Date</label>
                  <br></br>
                  <input
                    type="date"
                    name="startDate"
                    onChange={(e) =>
                      onInputChange("jobStartDate", e.target.value)
                    }
                  />
                  <br></br>
                  <label htmlFor="endDate">End Date</label>
                  <br></br>

                  <input
                    type="date"
                    name="endDate"
                    onChange={(e) =>
                      onInputChange("jobEndDate", e.target.value)
                    }
                  />
                </li>
                <li>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="expDesc"
                    placeholder="Enter your description"
                    cols={30}
                    rows={7}
                    onChange={(e) =>
                      onInputChange("jobDescription", e.target.value)
                    }
                  ></textarea>
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
