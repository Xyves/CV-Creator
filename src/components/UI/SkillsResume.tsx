export default function SkillsResume({ data }: { data: any }) {
  return (
    <ul className="ml-7  flex grid list-disc grid-flow-row grid-cols-2 flex-col ">
      {Array.isArray(data.skills) ? (
        data.skills.map((item) => (
          <li key={item.id} className="mb-2   w-1/2 p-2">
            {item.name}
          </li>
        ))
      ) : (
        <li key={data.skills.id} className="">
          {data.skills.name}
        </li>
      )}
    </ul>
  );
}
