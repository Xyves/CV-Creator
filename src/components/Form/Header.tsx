import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuRight } from "@mdi/js";
import { useState } from "react";
import { handleChildClick } from "../../utils/util";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section
      className="sectionForm border-[1px] border-solid border-white text-white"
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

          <div className="mg-0 p-3 ">
            <button
              className="m-0 bg-blue-600 p-2"
              onClick={() => {
                handleChildClick;
                window.print();
              }}
            >
              Save/Print
            </button>
          </div>
          <div className="credits mb-5 p-2 text-2xl">
            <h2 className="inline-block">Created by &nbsp;</h2>
            <a
              href="https://github.com/Xyves"
              target="_blank"
              className="inline-block"
            >
              <span> Xyves</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
}
