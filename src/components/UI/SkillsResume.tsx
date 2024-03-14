export default function SkillsResume({ data }) {
  return (
    <ul className="ml-7  flex grid list-disc grid-flow-row grid-cols-2 flex-col ">
      {Array.isArray(data.skill) ? (
        data.skill.map((item) => (
          <li key={item.id} className="mb-2   w-1/2 p-2">
            {item.name}
          </li>
        ))
      ) : (
        <li key={data.skill.id} className="">
          {data.skill.name}
        </li>
      )}
    </ul>
  );
}
