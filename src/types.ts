export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  descriptionEn: string;
  specs: string[];
  imageUrl: string;
  category: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: "AI" | "Hardware" | "Cloud & IoT";
  iconName: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEn: string;
  category: string;
  technologies: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  contentEn: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}
