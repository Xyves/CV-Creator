function Education() {
  return (
    <form action="">
      <fieldset>
        <ul>
          <li>
            <label htmlFor="qualifications">Qualifications</label>
            <input type="text" placeholder="Enter your qualifications" />
          </li>
          <li>
            <label htmlFor="jobPosition">School</label>
            <input type="text" placeholder="Enter your school name" />
          </li>
          <li>
            <label htmlFor="">Location</label>
            <input type="text" placeholder="Enter the location" />
          </li>
          <li>
            <label htmlFor="">Start & End Date</label>
            <input type="text" placeholder="MM/YY - MM/YY" />
          </li>
        </ul>
        <div className="button-container">
          <button className="addEdu">+ Add More Education</button>
        </div>
      </fieldset>
    </form>
  );
}
