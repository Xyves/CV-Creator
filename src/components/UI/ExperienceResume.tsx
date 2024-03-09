export default function ExperienceResume({ data }) {
  return (
    <div className="experienceContainer mb-12 mt-5 ">
      <p className="expPosition m-3 font-bold">{data.jobPosition}</p>
      <p className="expCompany mx-3 my-1 p-1  font-bold">
        {data.jobCompany} | {data.jobStartDate} -{" "}
        {data.isWorking ? "Present" : data.jobEndDate}
      </p>
      <p className="mx-3 my-1 p-1">{data.jobDescription}</p>
    </div>
  );
}
