import { Course } from "@/types/course";
import { Clock4, MessageCircleMore, Star, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CourseHero({ course }: { course: Course }) {
  return (
    <section className="bg-bgSecondary border-b border-borderColor py-10">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-16">
          {/* course overflow */}
          <div>
            <h1 className="text-4xl font-bold leading-tight mb-5">{course.title}</h1>
            <p className="leading-[1.7] text-textSecondary mb-6">{course.description}</p>

            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-borderColor mb-6">
              <div className="flex items-center gap-2 bg-amber-500 text-white px-3.5 py-1.5 rounded-md font-semibold text-[0.95rem]">
                <span>4.8</span> <Star className="text-white size-[17px] fill-white" />
              </div>
              <div className="flex items-center gap-2 text-[0.95rem]">
                <Users className="text-primary size-[22px] fill-primary" /> <span className="text-textSecondary"><strong>{course.studentsCount}</strong> students enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-[0.95rem]">
                <MessageCircleMore className="text-primary size-[22px]" /> <span className="text-textSecondary"><strong>{course.reviewsCount}</strong> reviews</span>
              </div>
              <div className="flex items-center gap-2 text-[0.95rem]">
                <Clock4 className="text-primary size-[22px]" /> <span className="text-textSecondary">Last updated <strong>{course.lastUpdated}</strong></span>
              </div>
            </div>
          </div>

          {/* Course Preview & Pricing Card */}
          <div className="bg-bgPrimary border border-borderColor rounded-sm overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-1">
            <Image src="/images/course-thumbnail.jpg" alt="Course preview" width={80} height={50} className="w-full h-[210px] object-cover rounded-sm" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className={`px-3 py-1 h-fit rounded-xl text-xs font-medium ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {course.level} Level
                </div>
                <div>
                  {course.isFree ? (
                    <span className="text-2xl font-bold">Free</span>
                  ) : course.price ? (
                    <>
                      <span className="text-2xl font-bold">৳{course.price}</span>{" "}
                      <small className="line-through">৳{course.originalPrice}</small>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">৳{course.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                <Button size="xl" className="text-[1.05rem] font-semibold">Enroll Now</Button>
              </div>

              {/* course features */}
              <ul className="text-textSecondary [&>li]:py-2.5">
                {course.courseFeatures.map((feature, index) => (
                  <li key={index}><span className="text-primary text-[1.2rem] font-md mr-2">✓</span> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
