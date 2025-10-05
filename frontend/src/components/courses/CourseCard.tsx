import Link from 'next/link';
import Image from "next/image";
import { Course } from '@/types/course';
import { Clock, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  maxDescriptionLength?: number;
  variant?: "default" | "compact" | "large";
}

const variantStyle = {
  default: {
    container: "bg-bgPrimary border-1 border-borderColor hover:border-primary rounded-md overflow-hidden custom-transition hover:translate-y-[-4px]",
    image: "h-38 bg-gradient",
    content: "p-4",
    header: "flex items-center justify-between mb-3",
    level: "px-3 py-1 h-fit rounded-xl text-xs font-medium",
    price: "text-xl font-bold",
    title: "text-[1.1rem] font-bold mb-2",
    description: "text-textSecondary text-[0.9rem] leading-[1.5] mb-4",
    footer: "flex justify-between pt-3 border-t border-borderColor text-[0.9rem]",
    cta: "flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium"
  },
  compact: {
    container: "bg-bgPrimary border-1 border-borderColor hover:border-primary rounded-md overflow-hidden custom-transition hover:translate-y-[-2px]",
    image: "h-32 bg-gradient",
    content: "p-3",
    header: "flex items-center justify-between mb-2",
    level: "px-2 py-1 h-fit rounded-lg text-xs font-medium",
    price: "text-lg font-bold",
    title: "text-base font-bold mb-1",
    description: "text-textSecondary text-[0.8rem] leading-[1.4] mb-3",
    footer: "flex justify-between pt-2 border-t border-borderColor text-[0.8rem]",
    cta: "flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium"
  },
  large: {
    container: "bg-bgPrimary border-2 border-borderColor rounded-[0.75rem] overflow-hidden custom-transition hover:shadow-[0_4px_16px_rgba(2,132,199,0.15)] hover:translate-y-[-4px]",
    image: "h-50 bg-gradient",
    content: "p-6",
    header: "flex justify-between mb-4",
    level: "px-3 py-1 h-fit rounded-xl text-xs font-medium",
    price: "text-2xl font-bold",
    title: "text-xl font-bold mb-3",
    description: "text-textSecondary leading-[1.7] mb-4",
    footer: "flex justify-between pt-4 border-t border-borderColor text-[0.9rem]",
    cta: "flex items-center gap-1 hover:gap-2 custom-transition text-primary font-semibold"
  }
};

export default function CourseCard({
  course,
  maxDescriptionLength,
  variant = "default"
}: CourseCardProps) {
  const style = variantStyle[variant];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={style.container}>
      {/* Course Image */}
      <div className={style.image}>
        <Image src={course.thumbnail} alt={course.title} height={200} width={400} className="w-full h-full" />
      </div>

      <div className={style.content}>
        {/* Header with Level and Price */}
        <div className={style.header}>
          <div className={`${style.level} ${getLevelColor(course.level)}`}>
            {course.level}
          </div>
          <div>
            {course.isFree ? (
              <span className={`${style.price} text-green-700`}>Free</span>
            ) : course.price ? (
              <>
                <span className={style.price}>৳{course.price}</span>{" "}
                <small className="line-through text-textSecondary">৳{course.originalPrice}</small>
              </>
            ) : (
              <span className={style.price}>৳{course.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Course Title */}
        <h3 className={style.title}>{course.title}</h3>

        {/* Course Description */}
        <p className={style.description}>
          {maxDescriptionLength
            ? course.description.slice(0, maxDescriptionLength) + (course.description.length > maxDescriptionLength ? "..." : "")
            : course.description
          }
        </p>

        {/* Footer with Duration and CTA */}
        <div className={style.footer}>
          <span className="flex items-center gap-1 text-textSecondary">
            <Clock className="size-4" />
            {course.duration}
          </span>
          <Link href={`/courses/${course.id}`} className={style.cta}>
            SEE DETAILS <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}