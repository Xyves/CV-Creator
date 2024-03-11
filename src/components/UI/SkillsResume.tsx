export default function SkillsResume({ data }) {
  return (
    <ul>
      {Array.isArray(data.skill) ? (
        data.skill.map((item) => (
          <li key={item.id} className="bg-green-400">
            {item.name}
          </li>
        ))
      ) : (
        <li key={data.skill.id} className="bg-green-400">
          {data.skill.name}
        </li>
      )}
    </ul>
  );
}
