import { BookOpen, BriefcaseBusiness, UserCheck, Users, Video, Zap } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Structured Curriculum",
    description: "Follow a carefully designed curriculum that takes you from basics to advanced concepts systematically"
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Expert Mentorship",
    description: "Learn from experienced competitive programmers who have achieved success in major competitions"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Hands-on Practice",
    description: "Solve hundreds of curated problems with detailed explanations and multiple approaches"
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Live Coding Sessions",
    description: "Participate in interactive problem-solving sessions and learn techniques used by top competitive programmers."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Support",
    description: "Join a vibrant community of learners, share knowledge, and grow together with peer support."
  },
  {
    icon: <BriefcaseBusiness className="h-8 w-8" />,
    title: "Career Guidance",
    description: "Receive guidance on interview preparation and career opportunities in tech industry"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-bgSecondary py-16">
      <div className="custom-container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose CPS Academy?</h2>
          <p className="section-subtitle">We provide everything you need to excel in competitive programming and build a successful career under one roof.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-bgPrimary p-8 rounded-xl shadow-sm custom-transition hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-accent-light rounded-lg flex items-center justify-center mb-6 text-primary text-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-3">{feature.title}</h3>
              <p className="text-textSecondary leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
