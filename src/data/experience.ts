export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "walmart",
    company: "Walmart Global Tech India",
    position: "Senior Software Engineer",
    location: "Bengaluru, Karnataka",
    period: "Nov 2021 - Present",
    description: "Leading two teams of full-stack developers within the Fintech Division, responsible for end-to-end development, code reviews, and stakeholder communication.",
    achievements: [
      "Championed the end-to-end development and deployment of Kafka and Azure Bus pipelines, driving flawless integration among heterogeneous systems",
      "Successfully rolled out WMPay throughout the enterprise, resulting in billions of dollars in added revenue for Walmart B2B",
      "Earned an esteemed Excellence Award for outstanding contributions",
      "Revamped long-running APIs for reporting by implementing server-push technology coupled with Azure storage",
      "Enhanced user experience with continuous progress updates and seamless download of large files",
      "Designed React.js components for document retention feature integrated throughout the application",
      "Managed storage of file metadata using Spring Boot backend with secure SAS token generation"
    ],
    technologies: ["React.js", "Spring Boot", "Kafka", "Azure", "JavaScript", "Java"]
  },
  {
    id: "societe-generale",
    company: "Société Générale",
    position: "Software Engineer - Full Stack",
    location: "Bengaluru, Karnataka",
    period: "Aug 2019 - Nov 2021",
    description: "Focused on modernizing application architecture and improving user experience through cutting-edge technologies.",
    achievements: [
      "Revamped application architecture from monolithic structure to fully cloud-native design",
      "Developed UI in React.js from scratch, achieving 30% performance gain compared to legacy Polymer.js",
      "Improved overall application performance and user experience significantly"
    ],
    technologies: ["React.js", "Cloud Technologies", "Polymer.js", "JavaScript"]
  },
  {
    id: "capgemini",
    company: "Capgemini",
    position: "Software Developer",
    location: "Bengaluru, Karnataka",
    period: "Jul 2017 - Aug 2019",
    description: "Built scalable applications focusing on distributed systems and file processing solutions.",
    achievements: [
      "Single-handedly built a scalable application using distributed worker multithreaded pattern",
      "Facilitated seamless file transformation between sender and receiver applications",
      "Implemented efficient and reliable file processing solutions"
    ],
    technologies: ["Java", "Distributed Systems", "Multithreading"]
  }
];

export const education = {
  degree: "B.Tech",
  field: "Computer Science and Engineering",
  institution: "West Bengal University Of Technology",
  period: "2013 - 2017",
  gpa: "8.46"
};

export const achievements = [
  "Engineering Excellence Award 2023 by Walmart",
  "Bravo Award 2023 by Walmart",
  "Walmart Certified Software Developer 2022",
  "Spot Award in Société Générale"
];
