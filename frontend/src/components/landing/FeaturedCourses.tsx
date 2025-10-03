import { Course } from "@/types/course";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Competitive Programming Fundamentals',
    description: 'Master the basics of data structures and algorithms with hands-on coding challenges and real-world problem solving.',
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
];

export default function FeaturedCourses() {
  return (
    <section className="bg-bgPrimary py-16">
      <div className="custom-container">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Explore our most popular courses designed to take you from beginner to expert.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {featuredCourses.map((course) => (
            <div key={course.id} className="bg-bgPrimary border-2 border-borderColor rounded-[0.75rem] overflow-hidden custom-transition hover:shadow-[0_4px_16px_rgba(2,132,199,0.15)] hover:translate-y-[-4px]">
              <div className="h-50 bg-gradient"></div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </div>
                  <div>
                    {course.isFree ? (
                      <span className="text-2xl font-bold">Free</span>
                    ) : course.offerPrice ? (
                      <>
                        <span className="text-2xl font-bold">৳{course.offerPrice}</span>{" "}
                        <small className="line-through">৳{course.price}</small>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">৳{course.price}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-textSecondary leading-[1.7] mb-4">{course.description}</p>
                <div className="flex justify-between pt-4 border-t border-borderColor text-[0.9rem]">
                  <span className="flex items-center  gap-1"><Clock className="size-4" />{course.duration}</span>
                  <Link href={`/course/${course.id}`} className="flex items-center gap-1 hover:gap-2 custom-transition text-primary font-semibold">SEE DETAILS <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
