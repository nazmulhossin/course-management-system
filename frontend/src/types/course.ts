export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price?: number;
  offerPrice?: number;
  isFree: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}