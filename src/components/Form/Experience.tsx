import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Experience({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    onInputChange(value);
  };
  return (
    <section
      className="experience "
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
                  <input type="text" onChange={handleChange} />
                </li>
                <li>
                  <label htmlFor="company">Company</label>
                  <br />

                  <input type="text" name="company" />
                </li>
                <li>
                  <label htmlFor="location">Location</label>
                  <br />

                  <input type="text" name="location" />
                </li>
                <li className="checkBox">
                  <input type="checkbox" name="isWorking" id="" />{" "}
                  <span> I am currently working in this role</span>
                </li>
                <li>
                  <label htmlFor="startDate">Start Date</label>
                  <br></br>
                  <input type="date" name="startDate" />
                  <br></br>
                  <label htmlFor="endDate">End Date</label>
                  <br></br>

                  <input type="date" name="endDate" />
                </li>
                <li>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="expDesc"
                    placeholder="Enter your description"
                    cols={30}
                    rows={7}
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
