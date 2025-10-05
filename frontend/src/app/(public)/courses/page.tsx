import { getCourses } from "@/lib/api/courses";
import { Course } from "@/types/course";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Courses",
};

export default async function course() {
  const courses = await getCourses();
  
  if (!courses) {
    notFound();
  }

  return (
    <div className="custom-container py-12">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Live Session Courses</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-bgPrimary border-1 border-borderColor hover:border-primary rounded-md overflow-hidden custom-transition hover:translate-y-[-4px]">
              <div className="h-38 bg-gradient"></div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </div>
                  <div>
                    {course.isFree ? (
                      <span className="text-xl font-bold">Free</span>
                    ) : course.price ? (
                      <>
                        <span className="text-xl font-bold">৳{course.price}</span>{" "}
                        <small className="line-through">৳{course.originalPrice}</small>
                      </>
                    ) : (
                      <span className="text-xl font-bold">৳{course.originalPrice}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2">{course.title}</h3>
                <p className="text-textSecondary text-[0.9rem] leading-[1.5] mb-4">{course.description.slice(0, 100)}{course.description.length > 100 ? '...' : ''}</p>
                <div className="flex justify-between pt-3 border-t border-borderColor text-[0.9rem]">
                  <span className="flex items-center gap-1"><Clock className="size-4" />{course.duration}</span>
                  <Link href={`/courses/${course.id}`} className="flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium">SEE DETAILS <ArrowRight className="size-4" /></Link>
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
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {course.level}
                  </div>
                  <div>
                    {course.isFree ? (
                      <span className="text-xl font-bold">Free</span>
                    ) : course.price ? (
                      <>
                        <span className="text-xl font-bold">৳{course.price}</span>{" "}
                        <small className="line-through">৳{course.originalPrice}</small>
                      </>
                    ) : (
                      <span className="text-xl font-bold">৳{course.originalPrice}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2">{course.title}</h3>
                <p className="text-textSecondary text-[0.9rem] leading-[1.5] mb-4">{course.description.slice(0, 100)}{course.description.length > 100 ? '...' : ''}</p>
                <div className="flex justify-between pt-3 border-t border-borderColor text-[0.9rem]">
                  <span className="flex items-center gap-1"><Clock className="size-4" />{course.duration}</span>
                  <Link href={`/courses/${course.id}`} className="flex items-center gap-1 hover:gap-2 custom-transition text-primary font-medium">SEE DETAILS <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div>
  )
}
