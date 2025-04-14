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
    id: "metafilix",
    title: "Metafilix",
    description: "A cutting-edge streaming platform with personalized recommendations, curated content collections, and social watching features.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Web3",
    categoryColor: "bg-secondary-500",
    technologies: ["React", "Next.js", "Node.js", "AWS"],
    liveUrl: "https://Metafilix.com"
  },
  {
    id: "fasynate",
    title: "Fasynate",
    description: "Premium perfume e-commerce website with elegant product displays, scent profiles, and a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1592945403407-9b7356e471b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "E-commerce",
    categoryColor: "bg-accent-500",
    technologies: ["Shopify", "JavaScript", "Liquid", "TailwindCSS"],
    liveUrl: "https://fasynate.com/"
  },
  {
    id: "prayermat",
    title: "Prayer Mat",
    description: "Islamic prayer mats and blankets online store with rich product filtering, cultural designs, and multi-currency support.",
    image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "E-commerce",
    categoryColor: "bg-primary-400",
    technologies: ["WooCommerce", "WordPress", "PHP", "jQuery"],
    liveUrl: "https://prayermat.pk/"
  },
  {
    id: "lenses",
    title: "Lenses Shop",
    description: "Specialized e-commerce platform for contact lenses with prescription management, reorder reminders, and eye health resources.",
    image: "https://images.unsplash.com/photo-1610126647731-33a6b8a22de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Healthcare",
    categoryColor: "bg-secondary-400",
    technologies: ["Magento", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "https://lenses.com.pk/"
  },
  {
    id: "ronettes",
    title: "Ronettes",
    description: "Vibrant makeup and cosmetics e-commerce site with tutorial videos, shade matching, and personalized product recommendations.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Beauty",
    categoryColor: "bg-accent-400",
    technologies: ["Shopify", "React", "GraphQL", "Styled Components"],
    liveUrl: "https://ronettes.pk/"
  }
];
