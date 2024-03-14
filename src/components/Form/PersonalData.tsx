import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function PersonalData({ onInputChange }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section
      className="contact sectionForm border-[1px] border-solid border-white"
      onClick={(e) => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <div className="flex items-center justify-between">
          <h1>Personal Data</h1>
          <Icon path={mdiMenuRight} size={2} className="text-white" />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h1>Personal Data</h1>
            <Icon
              path={mdiMenuDown}
              size={2}
              className="inline justify-self-end text-white"
            />
          </div>
          <form action="" id="personalDataForm" onClick={handleChildClick}>
            <fieldset>
              <ul>
                <li className="inputContainer">
                  <label htmlFor="name">Full Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    onChange={(e) => onInputChange("name", e.target.value)}
                  />
                </li>
                <li className="inputContainer">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={(e) => onInputChange("email", e.target.value)}
                  />
                </li>
                <li className="inputContainer">
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="phone"
                    onChange={(e) => onInputChange("phone", e.target.value)}
                  />
                </li>
                <li className="inputContainer">
                  <label htmlFor="address">Address</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    onChange={(e) => onInputChange("address", e.target.value)}
                  />
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
