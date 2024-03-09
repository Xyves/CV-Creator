import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import { useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section
      className="sectionForm text-white"
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {!isVisible ? (
        <div className="flex items-center justify-between">
          <h1>Resume</h1>
          <Icon path={mdiMenuRight} size={2} className="text-white" />
        </div>
      ) : (
        <>
          <div className="  flex items-center justify-between">
            <h1>Resume</h1>
            <Icon
              path={mdiMenuDown}
              size={2}
              className="  inline justify-self-end text-white"
            />
          </div>
          <div className="iconSection"></div>
          <div className="credits">
            <h2>Created by</h2>
            <a href="https://github.com/Xyves" target="_blank">
              <span>Xyves</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
}
