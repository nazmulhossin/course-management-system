import { Course } from "@/types/course";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";

const courses: Course[] = [
  {
    id: '1',
    title: 'Competitive Programming Fundamentals',
    description: 'Master the basics of data structures and algorithms with hands-on coding challenges.',
    thumbnail: '',
    isFree: true,
    level: 'Beginner',
    duration: '8 weeks'
  },
  {
    id: '2',
    title: 'Advanced Algorithm Design',
    description: 'Dive deep into complex algorithms, dynamic programming, and optimization techniques for competitive programming.',
    thumbnail: '',
    isFree: false,
    price: 4000,
    level: 'Advanced',
    duration: '12 weeks'
  },
  {
    id: '3',
    title: 'Data Structures Mastery',
    description: 'Comprehensive coverage of essential data structures with implementation and problem-solving techniques.',
    thumbnail: '',
    isFree: false,
    price: 2000,
    offerPrice: 1500,
    level: 'Intermediate',
    duration: '10 weeks'
  },
  {
    id: '4',
    title: 'Data Structures Mastery',
    description: 'Comprehensive coverage of essential data structures with implementation and problem-solving techniques.',
    thumbnail: '',
    isFree: false,
    price: 2000,
    offerPrice: 1500,
    level: 'Intermediate',
    duration: '10 weeks'
  },
];

export default function page() {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16">
        <BookOpen className="size-20 text-textTertiary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-textSecondary">No courses found!</h3>
      </div>
    );
  }

  return (
    <div className="custom-container">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Live Session Courses</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-bgPrimary border-1 border-borderColor hover:border-primary rounded-md overflow-hidden custom-transition hover:translate-y-[-4px]">
              <div className="h-38 bg-gradient"></div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </div>
                  <div>
                    {course.isFree ? (
                      <span className="text-xl font-bold">Free</span>
                    ) : course.offerPrice ? (
                      <>
                        <span className="text-xl font-bold">৳{course.offerPrice}</span>{" "}
                        <small className="line-through">৳{course.price}</small>
                      </>
                    ) : (
                      <span className="text-xl font-bold">৳{course.price}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2">{course.title}</h3>
                <p className="text-textSecondary text-[0.9rem] leading-[1.5] mb-4">{course.description}</p>
                <div className="flex justify-between pt-3 border-t border-borderColor text-[0.9rem]">
                  <span className="flex items-center gap-1"><Clock className="size-4" />{course.duration}</span>
                  <Link href={`/course/${course.id}`} className="flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium">SEE DETAILS <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pre-recorded Courses</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-bgPrimary border-1 border-borderColor hover:border-primary rounded-md overflow-hidden custom-transition hover:translate-y-[-4px]">
              <div className="h-38 bg-gradient"></div>
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </div>
                  <div>
                    {course.isFree ? (
                      <span className="text-xl font-bold">Free</span>
                    ) : course.offerPrice ? (
                      <>
                        <span className="text-xl font-bold">৳{course.offerPrice}</span>{" "}
                        <small className="line-through">৳{course.price}</small>
                      </>
                    ) : (
                      <span className="text-xl font-bold">৳{course.price}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2">{course.title}</h3>
                <p className="text-textSecondary text-[0.9rem] leading-[1.5] mb-4">{course.description}</p>
                <div className="flex justify-between pt-3 border-t border-borderColor text-[0.9rem]">
                  <span className="flex items-center gap-1"><Clock className="size-4" />{course.duration}</span>
                  <Link href={`/course/${course.id}`} className="flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium">SEE DETAILS <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div>
  )
}
