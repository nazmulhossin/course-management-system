import { Instructor } from "@/types/course";
import InstructorCard from "./InstructorCard";

export default function CourseInstructors({ instructors }: { instructors: Instructor[] }) {
  return (
    <div className="course-details-section">
      <h2>Course Instructors</h2>

      <div className="flex flex-col gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  )
}
