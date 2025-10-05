import { Module } from "@/types/course";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { BookOpenText, CirclePlay, CodeXml, FileCode, Video } from "lucide-react";

export default function CourseCurriculum({ modules }: { modules: Module[] }) {
  return (
    <div className="course-details-section">
      <h2>Course Curriculum</h2>
      <Accordion type="multiple">
        {modules.map((module) => (
          <AccordionItem key={module.id} value={`item-${module.id}`} className="bg-bgPrimary rounded-lg border border-borderColor mb-4">
            <AccordionTrigger className="flex bg-bgSecondary/45 hover:bg-bgSecondary hover:no-underline px-6 cursor-pointer">
              <span className="text-[1rem] font-semibold">{module.title}</span>
              <span className="text-[0.9rem] text-textTertiary font-normal ml-auto">{module.lessons.length} lectures</span>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              {module.lessons.map((lesson, index) => (
                <div key={index} className="text-[0.95rem] px-6 py-4 border-t border-borderColor flex justify-between">
                  <div className="flex items-center gap-4">
                    {getLessonIcon(lesson.type)} <span>{lesson.title}</span>
                  </div>
                  <span className="text-textTertiary text-[0.9rem]">{lesson.duration} m</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const getLessonIcon = (type: string) => {
  switch (type) {
    case "live":
      return <Video className="size-[1.3rem] text-textSecondary" />;
    case "video":
      return <CirclePlay className="size-[1.3rem] text-textSecondary" />;
    case "practice":
      return <CodeXml className="size-[1.3rem] text-textSecondary" />;
    case "reading":
      return <BookOpenText className="size-[1.3rem] text-textSecondary" />;
    default:
      return <FileCode className="size-[1.3rem] text-textSecondary" />;
  }
};