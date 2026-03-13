import Section from "../modules/Section";

export default function Projects() {

  const projects = [
    {
      title: "AI API Backend",
      desc: "Backend APIs for AI models and inference pipelines."
    },
    {
      title: "Distributed Data Pipeline",
      desc: "ETL pipelines using PySpark and AWS."
    },
    {
      title: "LLM Automation Tools",
      desc: "AI automation tools integrating LLM APIs."
    }
  ];

  return (
    <Section title="Projects">
      <div className="projects">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
