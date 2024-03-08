import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
export default function Education({ data }) {
  return (
    <div className="education ">
      <h3 className="my-1 p-1 text-2xl">
        {data.eduQuali}, {data.schoolName}
      </h3>
      <p className="my-1 p-1 text-2xl">
        <Icon path={mdiMapMarker} size={1} className="mr-1 inline" />
        {data.eduLocation}
      </p>
      <p className="my-1 p-1">
        {data.startEdu} - {data.endEdu}
      </p>
    </div>
  );
}
