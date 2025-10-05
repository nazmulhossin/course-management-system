export default function CourseLearningPoints({ points }: { points: string[] }) {
  return (
    <div className="course-details-section">
      <h2>What You'll Learn</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {points.map((point, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-primary font-md">✓</span> <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
