import { useState } from "react";
import { handleChildClick } from "../../utils/util";
export default function PersonalData() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section
      className="contact"
      onClick={(e) => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <h1>Personal Data</h1>
      ) : (
        <>
          <h1>Personal Data</h1>

          <form action="" id="personalDataForm" onClick={handleChildClick}>
            <fieldset>
              <ul>
                <li className="inputContainer">
                  <label htmlFor="name">Full Name</label>
                  <br />
                  <input type="text" placeholder="Enter your full name" />
                </li>

                <li className="inputContainer">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="text" placeholder="Enter your email address" />
                </li>
                <li className="inputContainer">
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input type="text" placeholder="Enter your phone number" />
                </li>
                <li className="inputContainer">
                  <label htmlFor="address">Address</label>
                  <br />
                  <input type="text" placeholder="Enter your address" />
                </li>
              </ul>
              <div className="button-container">
                <button
                  className="Save"
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
