import { getStrapiMediaUrl } from '../utils/urlHandler';
import { strapiClient } from './client';
import { 
  StrapiResponse, 
  StrapiLandingPage, 
  LandingPageData, 
  HeroSectionData, 
  Service, 
  Testimonial, 
  FAQItem 
} from '@/types/landing-page';

export async function getLandingPageData(): Promise<LandingPageData> {
  const response = await strapiClient.get<StrapiResponse<StrapiLandingPage>>(
    '/api/landing-page?populate=deep'
  );

  return transformLandingPageData(response.data);
}

// Transformer functions
const transformLandingPageData = (strapiData: StrapiLandingPage): LandingPageData => {
  const heroBlock = strapiData.blocks.find(block => block.__component === 'blocks.hero') as any;
  const servicesBlock = strapiData.blocks.find(block => block.__component === 'blocks.services') as any;
  const testimonialsBlock = strapiData.blocks.find(block => block.__component === 'blocks.testimonials') as any;
  const faqsBlock = strapiData.blocks.find(block => block.__component === 'blocks.fa-qs') as any;

  return {
    heroSectionData: transformHeroBlock(heroBlock),
    services: transformServicesBlock(servicesBlock),
    testimonials: transformTestimonialsBlock(testimonialsBlock),
    faqs: transformFAQsBlock(faqsBlock),
  };
};

const transformHeroBlock = (heroBlock: any): HeroSectionData => {
  if (!heroBlock) {
    return getDefaultHeroData();
  }

  const primaryButton = heroBlock.buttons?.find((btn: any) => btn.type === 'PRIMARY');
  const secondaryButton = heroBlock.buttons?.find((btn: any) => btn.type === 'SECONDARY');

  return {
    badge: heroBlock.badge || '',
    title: {
      text: heroBlock.title?.text || '',
      highlightText: heroBlock.title?.highlightText || '',
    },
    description: heroBlock.description || '',
    buttons: {
      primary: {
        label: primaryButton?.Label || 'Explore Courses',
        href: primaryButton?.href || '/courses',
      },
      secondary: {
        label: secondaryButton?.Label || 'Join Community',
        href: secondaryButton?.href || '#',
      },
    },
    image: {
      src: getStrapiMediaUrl(heroBlock.image?.url),
      alt: heroBlock.image?.alternativeText || '',
    },
  };
};

const transformServicesBlock = (servicesBlock: any): Service[] => {
  if (!servicesBlock?.services) {
    return [];
  }

  return servicesBlock.services.map((service: any) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    iconName: service.iconName,
  }));
};

const transformTestimonialsBlock = (testimonialsBlock: any): Testimonial[] => {
  if (!testimonialsBlock?.testimonials) {
    return [];
  }

  return testimonialsBlock.testimonials.map((testimonial: any) => ({
    id: testimonial.id,
    authorName: testimonial.name,
    authorInfo: testimonial.bio,
    testimonialText: testimonial.quote,
    avatar: testimonial.avatar ? {
      src: getStrapiMediaUrl(testimonial.avatar.url),
      alt: testimonial.avatar.alternativeText || `${testimonial.name} avatar`,
    } : undefined,
  }));
};

const transformFAQsBlock = (faqsBlock: any): FAQItem[] => {
  if (!faqsBlock?.faqs) {
    return [];
  }

  return faqsBlock.faqs.map((faq: any) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));
};

// Fallback data in case API fails
const getDefaultHeroData = (): HeroSectionData => ({
  badge: "Learn. Practice. Excel.",
  title: {
    text: "Your success, our priority —",
    highlightText: "CPS Academy"
  },
  description: "Master competitive programming with structured training programs, hands-on problem-solving sessions, and expert mentorship to build a successful career in tech.",
  buttons: {
    primary: { label: "Explore Courses", href: "/courses" },
    secondary: { label: "Join Community", href: "https://www.facebook.com/bd.cpsacademy" }
  },
  image: {
    src: "/images/competitive-programming-banner.png",
    alt: "competitive-programming-banner"
  }
});