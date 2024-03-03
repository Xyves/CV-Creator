function PersonalData() {
  return (
    <section className="contact">
      <form action="">
        <fieldset>
          <ul>
            <li className="inputContainer">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your full name" />
            </li>
            <li className="inputContainer">
              <label htmlFor="jobTitle">Name</label>
              <input type="text" placeholder="Enter your full name" />
            </li>
            <li className="inputContainer">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email address" />
            </li>
            <li className="inputContainer">
              <label htmlFor="phone">Phone</label>
              <input type="text" placeholder="Enter your phone number" />
            </li>
            <li className="inputContainer">
              <label htmlFor="address">address</label>
              <input type="text" placeholder="Enter your address" />
            </li>
          </ul>
          <div className="button-container">
            <button className="clear">Clear</button>
            <button>Save {/* Roll up when clicked */}</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
