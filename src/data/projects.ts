export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "wmpay-integration",
    title: "WMPay Enterprise Integration",
    description: "End-to-end development of Kafka and Azure Bus pipelines for enterprise-wide payment system integration.",
    longDescription: "Led the development and deployment of comprehensive Kafka and Azure Service Bus pipelines that enabled seamless integration across heterogeneous systems. This project facilitated the enterprise-wide adoption of WMPay, Walmart's payment platform, resulting in billions of dollars in additional revenue for Walmart B2B operations.",
    technologies: ["Kafka", "Azure Service Bus", "Spring Boot", "React.js", "Microservices"],
    featured: true,
    category: "Enterprise"
  },
  {
    id: "document-retention-system",
    title: "Document Retention System",
    description: "React.js component system for secure document management with dynamic SAS token generation.",
    longDescription: "Designed and implemented a comprehensive document retention system using React.js components integrated throughout the application. The system manages file metadata through a Spring Boot backend and enables secure direct file upload and download via dynamic SAS token generation.",
    technologies: ["React.js", "Spring Boot", "Azure Storage", "SAS Tokens", "TypeScript"],
    featured: true,
    category: "Web Application"
  },
  {
    id: "api-enhancement",
    title: "Real-time Reporting API",
    description: "Revamped long-running APIs with server-push technology for enhanced user experience.",
    longDescription: "Transformed traditional REST APIs for reporting by implementing server-push technology coupled with Azure storage. This enhancement provides users with continuous progress updates and enables seamless download of large files while mitigating heap memory issues.",
    technologies: ["Spring Boot", "Azure Storage", "WebSockets", "REST API", "Server-Push"],
    featured: true,
    category: "Backend"
  },
  {
    id: "cloud-migration",
    title: "Monolith to Cloud-Native Migration",
    description: "Complete architectural transformation from monolithic to cloud-native design at Société Générale.",
    longDescription: "Led the complete architectural overhaul of legacy applications, transforming monolithic structures into fully cloud-native designs. Developed new React.js UI from scratch, achieving 30% performance improvement over the previous Polymer.js implementation.",
    technologies: ["React.js", "Cloud Architecture", "Microservices", "Polymer.js"],
    featured: false,
    category: "Architecture"
  },
  {
    id: "file-processing-system",
    title: "Distributed File Processing System",
    description: "Scalable application using distributed worker multithreaded pattern for file transformation.",
    longDescription: "Single-handedly built a highly scalable application implementing a distributed worker multithreaded pattern. The system facilitates efficient file transformation between sender and receiver applications, handling large volumes of data processing.",
    technologies: ["Java", "Multithreading", "Distributed Systems", "File Processing"],
    featured: false,
    category: "System Design"
  },
  {
    id: "csebuddy-youtube",
    title: "CSEBuddy YouTube Channel",
    description: "Educational content creation for full-stack development community.",
    longDescription: "Created and maintained an educational YouTube channel focused on sharing full-stack development knowledge with the community. The channel covers various programming concepts, tutorials, and industry insights to help aspiring developers.",
    technologies: ["Content Creation", "Teaching", "Community Building"],
    liveUrl: "https://youtube.com/@csebuddy",
    featured: false,
    category: "Education"
  }
];

// You can add more projects from your GitHub repositories later
export const githubProjects = [
  // These will be populated from GitHub API
];
