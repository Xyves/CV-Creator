import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiMapMarker } from "@mdi/js";
export default function MainResume({ data }) {
  return (
    <div className="resumePreview">
      <div className="resumeTop">
        <header className="max-h-52 bg-yellow-500 p-12 " h-2>
          <h1 className=" p-3 text-center">{data.name}</h1>
          <div className="iconContainer name flex justify-between p-5">
            <div className="email">
              <Icon path={mdiEmail} size={1} className="inline" />
              <span className="ml-1">{data.email}</span>
            </div>
            <div className="phone">
              <Icon path={mdiPhone} size={1} className="inline" />
              <span className="ml-1">{data.phone}</span>
            </div>
            <div className="location">
              <Icon path={mdiMapMarker} size={1} className=" inline" />
              <span className="ml-1">{data.address}</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
