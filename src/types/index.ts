export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: "education" | "professional" | "other";
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
  imageUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceArea {
  id: number;
  title: string;
  description: string;
  icon: string;
}
