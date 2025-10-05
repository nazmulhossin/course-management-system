import { Star } from "lucide-react";
import Image from "next/image";

export default function RelatedCourses() {
  return (
    <div className="course-sidebar-section">
      <h3>Related Courses</h3>
      <div className="flex gap-4 py-4 border-b border-borderColor">
        <Image src="/images/course-thumbnail.jpg" width={80} height={80} alt="Related course" className="w-20 h-12 object-cover rounded-sm" />
        <div>
          <h4 className="text-[0.95rem] font-bold">Data Structures Fundamentals</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 bg-amber-500 text-white px-2 py-0.5 rounded-md font-semibold text-xs">
              <span>4.8</span> <Star className="text-white size-[12px] fill-white" />
            </div>
            <span className="text-primary">৳99.99</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 py-4">
        <Image src="/images/course-thumbnail.jpg" width={80} height={80} alt="Related course" className="w-20 h-12 object-cover rounded-sm" />
        <div>
          <h4 className="text-[0.95rem] font-bold">Data Structures Fundamentals</h4>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 bg-amber-500 text-white px-2 py-0.5 rounded-md font-semibold text-xs">
              <span>4.8</span> <Star className="text-white size-[12px] fill-white" />
            </div>
            <span className="text-primary">৳99.99</span>
          </div>
        </div>
      </div>
    </div>
  )
}
