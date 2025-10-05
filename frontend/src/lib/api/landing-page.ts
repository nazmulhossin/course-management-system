import { FAQItem, HeroSectionData, LandingPageData, Service, Testimonial } from "@/types/landing-page";
import { BookOpen, UserCheck, Zap, Video, Users, BriefcaseBusiness, type LucideIcon } from "lucide-react";

// Mock Data
export const heroSectionData: HeroSectionData = {
  badge: "Learn. Practice. Excel.",
  title: {
    text: "Your success, our priority —",
    highlightText: "CPS Academy",
  },
  description: "Master competitive programming with structured training programs, hands-on problem-solving sessions, and expert mentorship to build a successful career in tech.",
  buttons: {
    primary: {
      label: "Explore Courses",
      href: "/courses",
    },
    secondary: {
      label: "Join Community",
      href: "https://www.facebook.com/bd.cpsacademy",
    },
  },
  image: {
    src: "/images/competitive-programming-banner.png",
    alt: "Competitive Programming Banner",
  },
};

const services: Service[] = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Follow a carefully designed curriculum that takes you from basics to advanced concepts systematically"
  },
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    description: "Learn from experienced competitive programmers who have achieved success in major competitions"
  },
  {
    icon: Zap,
    title: "Hands-on Practice",
    description: "Solve hundreds of curated problems with detailed explanations and multiple approaches"
  },
  {
    icon: Video,
    title: "Live Coding Sessions",
    description: "Participate in interactive problem-solving sessions and learn techniques used by top competitive programmers."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of learners, share knowledge, and grow together with peer support."
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Guidance",
    description: "Receive guidance on interview preparation and career opportunities in tech industry"
  },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    authorName: "Md Nazmul Hossain",
    authorInfo: "NCPC Regionalist, IU (CSE)",
    authorAvatar: "",
    testimonialText: "CPS Academy transformed my coding skills completely. The structured curriculum and expert mentorship helped me crack interviews at top tech companies. Highly recommended!"
  },
  {
    id: "2",
    authorName: "Sujan Roy",
    authorInfo: "NCPC Regionalist, IU (CSE)",
    authorAvatar: "",
    testimonialText: "The live coding sessions and practice problems are incredibly valuable. I went from struggling with basic algorithms to competing in international contests within 6 months."
  },
  {
    id: "3",
    authorName: "Rabbani Islam Refat",
    authorInfo: "ICPC Asia West Finalist, AppsCode, IU (CSE)",
    authorAvatar: "",
    testimonialText: "Best investment in my career! The mentors are supportive, the community is amazing, and the learning resources are top-notch. Got placed at Microsoft thanks to CPS Academy."
  }
];

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Do I need prior programming experience to start?",
    answer: "No prior experience is required for our beginner courses. We start from the very basics and gradually progress to advanced topics. Our curriculum is designed to accommodate complete beginners while also challenging experienced programmers.",
  },
  {
    id: "2",
    question: "What programming languages do you teach?",
    answer: "We primarily focus on C++ and Python for competitive programming as they are the most commonly used languages in competitions. However, we also provide guidance on Java and other languages based on student preferences and requirements.",
  },
  {
    id: "3",
    question: "How much time should I dedicate weekly?",
    answer: "We recommend dedicating 8-12 hours per week for optimal progress. This includes watching video lectures, solving practice problems, and participating in coding contests. However, you can learn at your own pace with our flexible schedule.",
  },
  {
    id: "4",
    question: "Do you provide certificate upon completion?",
    answer: "Yes, we provide certificates of completion for all paid courses. These certificates can be shared on LinkedIn and other professional platforms. For free courses, you can request a certificate for a small fee.",
  },
  {
    id: "5",
    question: "What kind of support do you offer?",
    answer: "We provide multiple support channels including dedicated Discord community, mentor support, code reviews, and regular doubt-clearing sessions. Our mentors are available to help you with technical challenges and career guidance.",
  },
  {
    id: "6",
    question: "Can I get a refund if I am not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee for all our paid courses. If you are not satisfied with the course content or teaching methodology, you can request a full refund within 30 days of enrollment.",
  },
];

export const getLandingPageData = (): LandingPageData => {
  return {
    heroSectionData,
    services,
    testimonials,
    faqs
  };
};
