export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript", 
      "React.js",
      "Next.js",
      "CSS",
      "Material UI",
      "React Bootstrap",
      "Redux",
      "Jest"
    ]
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring",
      "Spring Boot",
      "Spring Reactive",
      "Spring Cloud",
      "Clean Code",
      "Data Structures",
      "Algorithms"
    ]
  },
  {
    category: "Database",
    skills: [
      "Azure SQL",
      "PostgreSQL",
      "BigQuery",
      "MongoDB",
      "Cassandra"
    ]
  },
  {
    category: "Messaging & Cloud",
    skills: [
      "Kafka",
      "Azure Service Bus",
      "Azure Storage",
      "Cloud Architecture"
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "Microservices",
      "System Design",
      "Code Review",
      "Team Leadership"
    ]
  }
];

export const techStack = {
  primary: ["React.js", "Next.js", "TypeScript", "Node.js", "Java", "Spring Boot"],
  secondary: ["PostgreSQL", "MongoDB", "Azure", "Kafka", "Docker"],
  learning: ["GraphQL", "AWS", "Kubernetes", "Python"]
};
