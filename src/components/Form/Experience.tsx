import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Experience({ onInputChange }: { onInputChange: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section
      className="experience sectionForm border-[1px] border-solid border-white"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <div className="flex items-center justify-between">
          <h1>Experience</h1>
          <Icon path={mdiMenuRight} size={2} className="text-white" />
        </div>
      ) : (
        <>
          <div className="  flex items-center justify-between">
            <h1>Experience</h1>
            <Icon
              path={mdiMenuDown}
              size={2}
              className="  inline justify-self-end text-white"
            />
          </div>
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
                <li className="checkBox">
                  <input
                    type="checkbox"
                    name="isWorking"
                    id=""
                    value="true"
                    checked={isChecked}
                    onChange={(e) => {
                      handleCheckboxChange();
                      onInputChange("isWorking", e.target.checked);
                    }}
                  />
                  <span> Currently working</span>
                </li>
                <li>
                  <label htmlFor="startDate">Start Date</label>
                  <br></br>
                  <input
                    type="month"
                    name="startDate"
                    onChange={(e) =>
                      onInputChange("jobStartDate", e.target.value)
                    }
                  />
                  <br></br>
                  {!isChecked ? (
                    <>
                      <label htmlFor="endDate">End Date</label>
                      <br></br>

                      <input
                        type="month"
                        name="endDate"
                        onChange={(e) =>
                          onInputChange("jobEndDate", e.target.value)
                        }
                      />
                    </>
                  ) : null}
                </li>
                <li>
                  <label htmlFor="description">Description</label>
                  <br></br>
                  <textarea
                    name="description "
                    className="my-3 resize-none p-1"
                    id="expDesc"
                    placeholder="Enter your description"
                    cols={20}
                    rows={7}
                    onChange={(e) =>
                      onInputChange("jobDescription", e.target.value)
                    }
                  ></textarea>
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
