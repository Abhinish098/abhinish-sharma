import Section from "../modules/Section";

export default function Skills() {
  const skills = [
    "Python",
    "PySpark",
    "SQL",
    "AWS",
    "Airflow",
    "Docker",
    "Data Engineering",
    "AI Backend APIs",
    "ETL Pipelines",
    "Machine Learning Systems"
  ];

  return (
    <Section title="Skills">
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </Section>
  );
}
