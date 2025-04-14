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
    id: "casino-game",
    title: "Casino Game Platform",
    description: "A feature-rich online casino gaming platform with real-time multiplayer functionality, secure payment processing, and responsive design.",
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "React",
    categoryColor: "bg-primary-500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://pakgames.net"
  },
  {
    id: "crypto-website",
    title: "18 Plus",
    description: "A cutting-edge cryptocurrency trading and investment platform with real-time market data, secure wallet integration, and advanced trading tools.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Web3",
    categoryColor: "bg-secondary-500",
    technologies: ["React", "Web3.js", "Node.js", "Blockchain"],
    liveUrl: "https://18plus.io"
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
