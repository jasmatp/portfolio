import { iconMap } from "../common/Footer";


export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  address: string;
}

export interface WorkExperienceProp {
  id: number,
  role: string;
  company: string | null;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  title: string;
  location: string;
  years: number;
  description: string;
}

export type StatItemProps = {
  value: number;
  suffix: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  skill?: string;
  image?: string;
  category: string;
  id: number;
  projectType: string;
  client: string;
  duration: string;
  task: string;
  budget: string;
  liveUrl: string,
  tags: string[];
};

export type Service = {
  servicetitle: string;
  serviceicon: string;
  servicedescription: string;
};

export type BlogPost = {
  id: number;
  image: string;
  category: string;
  author: string;
  commentsCount: number;
  title: string;
};

export type SocialIcon = {
  name: string;
  icon: keyof typeof iconMap; // restrict to keys of iconMap
  url: string;
  color: string;
};

export interface ProfileData {
  name: string;
  title: string;
  contact: Contact;
  education: Education[];
  expertise: string[];
  stats: StatItemProps[];
  projects: Project[];
  DOB: string;
  totalExperience: string;
  profile1: string;
  profile2: string;
  workExperience: WorkExperienceProp[];
  services: Service[];
  blogPost: BlogPost[]
}
export interface ProfileDataProps {
  ProfileData: ProfileData;
}
export interface StatDataProps {
  StateData: StatItemProps[];
}

export interface ProjectProps {
  projectData: Project[];
}

export interface WorkexperienceProps {
  workExperienceData: WorkExperienceProp[];
}

export interface EducationProps {
  educationData: Education[];
}

export interface ServiceProps {
  serviceData: Service[];
}

export interface ContactProps {
  contactData: Contact;
}

export interface BlogPostProps {
  blogPostData: BlogPost[];
}

export interface SocialIconProps {
  socialIconData: SocialIcon[];
}