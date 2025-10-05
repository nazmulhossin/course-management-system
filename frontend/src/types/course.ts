export interface Lesson {
  title: string;
  duration: number;
  type: "live" | "video" | "practice" | "reading";
  isPreview: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  expertise: string[];
}

export interface Review {
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  duration: string;

  price: number;
  originalPrice: number;
  isFree: boolean;

  rating: number;
  reviewsCount: number;
  studentsCount: number;
  lastUpdated: string;
  isFeatured: boolean;

  courseFeatures: string[];
  instructors: Instructor[];
  learningPoints: string[];
  requirements: string[];
  modules: Module[];
  reviews: Review[];
}
