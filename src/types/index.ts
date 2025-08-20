export interface Project {
  id: string;
  title: string;
  summary: string;
  year: number;
  tags: string[];
  technologies: string[];
  image: string;
  links: {
    code?: string | null;
    live?: string | null;
    caseStudy?: string | null;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}