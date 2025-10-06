export interface StrapiResponse<T> {
  data: T;
  meta: any;
}

export interface StrapiLandingPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}

export type Block = HeroBlock | ServicesBlock | TestimonialsBlock | FAQsBlock;

export interface HeroBlock {
  __component: "blocks.hero";
  id: number;
  badge: string;
  description: string;
  title: {
    id: number;
    text: string;
    highlightText: string;
  };
  buttons: Array<{
    id: number;
    Label: string;
    href: string;
    isExternal: boolean;
    isButton: boolean;
    type: "PRIMARY" | "SECONDARY";
  }>;
  image: {
    id: number;
    documentId: string;
    alternativeText: string;
    url: string;
  };
}

export interface ServicesBlock {
  __component: "blocks.services";
  id: number;
  services: Array<{
    id: number;
    title: string;
    description: string;
    iconName: string;
  }>;
}

export interface TestimonialsBlock {
  __component: "blocks.testimonials";
  id: number;
  testimonials: Array<{
    id: number;
    name: string;
    bio: string;
    quote: string;
    avatar: {
      id: number;
      documentId: string;
      url: string;
      alternativeText: string | null;
    };
  }>;
}

export interface FAQsBlock {
  __component: "blocks.fa-qs";
  id: number;
  faqs: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
}

// Transformed data types for frontend
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
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  authorName: string;
  authorInfo: string;
  testimonialText: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface LandingPageData {
  heroSectionData: HeroSectionData;
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}