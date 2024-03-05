import Experience from "../Form/Experience";
export default function MainResume({ name, email, phone, address }) {
  return (
    <div className="resumePreview">
      <div className="resumeTop">
        <header>
          <h1 className="name">Leslie Hamilton</h1>
          <div className="iconContainer">
            <div className="email">
              <span>LeslieLHamilton@gmail.com</span>
              <i></i>
            </div>
            <div className="phone">
              <span>504715674</span>
              <i></i>
            </div>
            <div className="location">
              <span>Kraków</span>
              <i></i>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
