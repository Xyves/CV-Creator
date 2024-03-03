function Experience() {
  return (
    <form action="">
      <fieldset>
        <ul>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
          <li>
            <label htmlFor=""></label>
            <input type="text" />
          </li>
        </ul>
        <div className="checkBox">
          <input type="checkbox" name="" id="" />{" "}
          <span> I am currently working in this role</span>
        </div>
        <div>
          <label htmlFor="">Start & End Date</label>
          <input type="text" placeholder="MM/YY - MM/YY" />
        </div>
        <div className="buttons">
          <button>+ Add More Work Experience</button>
        </div>
      </fieldset>
    </form>
  );
}
