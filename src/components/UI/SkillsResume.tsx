export default function SkillsResume({ data }) {
  console.log(data);
  return (
    <ul>
      {Array.isArray(data.skill) ? (
        data.skill.map((item) => (
          <li key={item.id} className="mb-5 block bg-green-400 p-3">
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
