import { getFeaturedCourses } from "@/lib/api/courses";
import CourseCard from "../courses/CourseCard";

export default async function FeaturedCourses() {
  const featuredCourses = await getFeaturedCourses();

  return (
    <section className="bg-bgPrimary py-16">
      <div className="custom-container">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">Explore our most popular courses designed to take you from beginner to expert.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} maxDescriptionLength={150} variant="large" />
          ))}
        </div>
      </div>
    </section >
  )
}
