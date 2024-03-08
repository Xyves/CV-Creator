export default function ExperienceResume({ data }) {
  return (
    <div className="experienceContainer mt-5">
      <p className="expPosition">{data.jobPosition}</p>
      <p className="expCompany">{data.jobCompany}</p>
      <p className="expAddress">{data.jobAddress}</p>
      <p className="jobStart">
        {data.jobStartDate} - {data.jobEndDate}
      </p>
      <p>{data.jobDescription}</p>
    </div>
  );
}
