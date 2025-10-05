import { type LucideIcon } from "lucide-react";

export interface HeroSectionData {
  badge: string;
  title: {
    text: string;
    highlightText: string;
  };
  description: string;
  buttons: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorInfo: string;
  authorAvatar: string;
  testimonialText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LandingPageData {
  heroSectionData: HeroSectionData;
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}