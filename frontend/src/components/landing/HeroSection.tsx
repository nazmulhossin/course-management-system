import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#F5FBFF] to-white dark:from-slate-800/40 dark:to-slate-900 py-16">
      <div className="custom-container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-18 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent-light text-primary dark:bg-primary-900 dark:text-accent-primary rounded-full text-sm font-semibold mb-6">
              Learn. Practice. Excel.
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-[1.2]">Your success, our priority — <span className="text-primary">CPS Academy</span></h1>
            <p className="text-[1.1rem] text-textSecondary leading-[1.8] mb-8">Master competitive programming with structured training programs, hands-on problem-solving sessions,
              and expert mentorship to build a successful career in tech.</p>
            <div className="flex gap-4 flex-wrap">
              <Button size="xl"><Link href="#courses">Explore Courses</Link></Button>
              <Button variant="outline" size="xl"><Link href="#courses">Contact Us</Link></Button>
            </div>
          </div>
          <div>
            <Image src="/images/competitive-programming-banner.png" width={200} height={100} alt="programming banner" className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
