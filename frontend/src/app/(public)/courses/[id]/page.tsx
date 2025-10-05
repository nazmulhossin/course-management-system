import CourseCurriculum from "@/components/courses/CourseCurriculum";
import CourseHero from "@/components/courses/CourseHero";
import CourseInstructors from "@/components/courses/CourseInstructors";
import CourseLearningPoints from "@/components/courses/CourseLearningPoints";
import CourseRequirements from "@/components/courses/CourseRequirements";
import RelatedCourses from "@/components/courses/RelatedCourses";
import { getCourseById } from "@/lib/api/courses";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseHero course={course} />

      <section className="py-12">
        <div className="custom-container grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <div className="flex flex-col gap-12">
            <CourseLearningPoints points={course.learningPoints} />
            <CourseRequirements requirements={course.requirements} />
            <CourseCurriculum modules={course.modules} />
            <CourseInstructors instructors={course.instructors} />
          </div>

          <aside>
            <RelatedCourses />
          </aside>
        </div>
      </section>
    </>
  )
}
