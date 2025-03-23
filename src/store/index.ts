import { defineStore } from "pinia";
import type {
  TimelineItem,
  BlogPost,
  Service,
  ExperienceArea,
} from "../types/index.ts";

// CV Store
export const useCVStore = defineStore("cv", {
  state: () => ({
    timelineItems: [
      {
        id: 1,
        title: "High School Grad",
        subtitle: "Science Focus",
        description: "Graduated with honors in science and mathematics",
        date: "2012",
        type: "education",
      },
      {
        id: 2,
        title: "Food Engineering",
        subtitle: "University of Technology",
        description: "Bachelor degree in Food Engineering",
        date: "2012-2016",
        type: "education",
      },
      {
        id: 3,
        title: "Food Technology Grad",
        subtitle: "Advanced Studies",
        description: "Master degree in Food Technology",
        date: "2016-2018",
        type: "education",
      },
      {
        id: 4,
        title: "Lab Technician",
        subtitle: "Research Lab",
        description: "Worked as a lab technician in food research",
        date: "2016-2018",
        type: "professional",
      },
      {
        id: 5,
        title: "Machine Learning Engineer",
        subtitle: "Informatics",
        description: "Conducted research on food preservation techniques",
        date: "2018-2020",
        type: "professional",
      },
    ] as TimelineItem[],
  }),
  getters: {
    getEducationalItems: (state) =>
      state.timelineItems.filter((item) => item.type === "education"),
    getProfessionalItems: (state) =>
      state.timelineItems.filter((item) => item.type === "professional"),
    getOtherItems: (state) =>
      state.timelineItems.filter((item) => item.type === "other"),
  },
});

// Blog Store
export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogPosts: [
      {
        id: 1,
        title: "Getting Started with Vue 3",
        summary: "Learn about the new features in Vue 3 and how to use them",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        date: "2023-01-15",
        tags: ["Vue", "JavaScript", "Web Development"],
      },
      {
        id: 2,
        title: "TypeScript Best Practices",
        summary: "Explore best practices for using TypeScript in your projects",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        date: "2023-02-22",
        tags: ["TypeScript", "JavaScript", "Programming"],
      },
      {
        id: 3,
        title: "Responsive Design Techniques",
        summary:
          "Learn how to create responsive websites that work on all devices",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        date: "2023-03-10",
        tags: ["CSS", "Web Design", "Responsive"],
      },
    ] as BlogPost[],
    tags: [
      "Vue",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Programming",
      "CSS",
      "Web Design",
      "Responsive",
    ],
  }),
  getters: {
    getBlogPostsByTag: (state) => (tag: string) => {
      return state.blogPosts.filter((post) => post.tags.includes(tag));
    },
    getRecentPosts: (state) => {
      return [...state.blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },
  },
});

// Services Store
export const useServicesStore = defineStore("services", {
  state: () => ({
    services: [
      {
        id: 1,
        title: "Web Development",
        description:
          "Modern, responsive websites built with the latest technologies",
        icon: "mdi-web",
      },
      {
        id: 2,
        title: "UI/UX Design",
        description:
          "User-centered design focused on creating engaging experiences",
        icon: "mdi-palette",
      },
      {
        id: 3,
        title: "Technical Consultation",
        description: "Expert advice on technology solutions for your business",
        icon: "mdi-account-tie",
      },
    ] as Service[],
  }),
});

// Experience Areas Store
export const useExperienceStore = defineStore("experience", {
  state: () => ({
    areas: [
      {
        id: 1,
        title: "Front-end Development",
        description: "Building responsive and interactive user interfaces",
        icon: "mdi-language-html5",
      },
      {
        id: 2,
        title: "Back-end Development",
        description: "Creating robust APIs and server-side applications",
        icon: "mdi-server",
      },
      {
        id: 3,
        title: "Database Design",
        description: "Designing efficient database structures",
        icon: "mdi-database",
      },
    ] as ExperienceArea[],
  }),
});
