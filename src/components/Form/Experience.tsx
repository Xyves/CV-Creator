import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: any) => {
    setSelectionRange([ranges.selection]);
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
                  <label htmlFor="">Position</label>
                  <br />
                  <input type="text" />
                </li>
                <li>
                  <label htmlFor="">Company</label>
                  <br />

                  <input type="text" />
                </li>
                <li>
                  <label htmlFor="">Location</label>
                  <br />

                  <input type="text" />
                </li>
                <li className="checkBox">
                  <input type="checkbox" name="" id="" />{" "}
                  <span> I am currently working in this role</span>
                </li>
                <li>
                  <label htmlFor="">Start Date</label>
                  <br></br>
                  <input type="date" />
                  <br></br>
                  <label htmlFor="">End Date</label>
                  <br></br>

                  <input type="date" />
                </li>
                <li>
                  <label htmlFor="">Description</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter your description"
                    cols="30"
                    rows="7"
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
