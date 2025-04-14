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
    id: "pakgame",
    title: "PakGame.net",
    description: "A premium online casino platform with live games, sports betting, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Casino",
    categoryColor: "bg-primary-500",
    technologies: ["React", "Node.js", "WebSockets", "Payment Gateway"],
    liveUrl: "https://pakgame.net"
  },
  {
    id: "slot-games",
    title: "Advanced Slot Games",
    description: "Collection of interactive slot games with rich animations and realistic sound effects.",
    image: "https://images.unsplash.com/photo-1596838132731-31a4e30c6b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Gaming",
    categoryColor: "bg-secondary-500",
    technologies: ["JavaScript", "WebGL", "Canvas API", "Sound Processing"],
    liveUrl: "https://pakgame.net/slots"
  },
  {
    id: "live-dealer",
    title: "Live Dealer Platform",
    description: "Real-time live dealer experience with multiple camera angles and interactive betting interface.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Live Streaming",
    categoryColor: "bg-accent-500",
    technologies: ["WebRTC", "Socket.io", "React", "Node.js"],
    liveUrl: "https://pakgame.net/live"
  }
];
