import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";

export default function Education({ data }: { data: any }) {
  return (
    <div className="education mb-5">
      <p className="text-1xl ">
        <Icon path={mdiMapMarker} size={1} className="mr-1 inline" />
        {data.eduLocation}
      </p>
      <p className="-mb-3 mt-1  p-1 text-[#cbc7c2]">
        {data.startEdu} - {data.isStudying ? "Present" : data.jobEndDate}
      </p>
      <h3 className="my-1 p-1 text-2xl">
        {data.eduQuali}, {data.schoolName}
      </h3>
    </div>
  );
}
