import CourseCard from "@/components/courses/CourseCard";
import { getCourses } from "@/lib/api/courses";
import { Metadata } from "next";
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
            <CourseCard course={course} maxDescriptionLength={100} />
          ))}
        </div>
      </section >

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pre-recorded Courses</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {courses.map((course) => (
            <CourseCard course={course} maxDescriptionLength={100} />
          ))}
        </div>
      </section >
    </div>
  )
}
