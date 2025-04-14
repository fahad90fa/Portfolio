export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with product filtering, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "React",
    categoryColor: "bg-primary-500",
    technologies: ["React", "Redux", "Node.js", "MySQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "voice-assistant",
    title: "AI Voice Assistant",
    description: "A voice-activated assistant that uses OpenAI and ElevenLabs for natural conversations.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Python",
    categoryColor: "bg-secondary-500",
    technologies: ["Python", "OpenAI", "ElevenLabs", "Whisper"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "crm-dashboard",
    title: "CRM Integration Dashboard",
    description: "A centralized dashboard connecting Salesforce, Zoho, and WhatsApp Business API.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Node.js",
    categoryColor: "bg-accent-500",
    technologies: ["Node.js", "Salesforce API", "WhatsApp API", "React"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
