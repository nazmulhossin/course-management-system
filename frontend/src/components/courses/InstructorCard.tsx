import { Instructor } from "@/types/course";
import Image from "next/image";

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="flex gap-6">
      <Image src={instructor.avatar} alt={instructor.name} width={80} height={80} className="size-18 rounded-full object-cover" />
      <div>
        <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
        <p className="text-textTertiary mb-3">{instructor.title}</p>
        <p className="text-textSecondary">{instructor.bio}</p>
      </div>
    </div>
  );
}
