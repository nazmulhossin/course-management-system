export default function CourseRequirements({ requirements }: { requirements: string[] }) {
  return (
    <div className="course-details-section">
      <h2>Requirements</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {requirements.map((requirements, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-primary font-md">↪</span> <span>{requirements}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
