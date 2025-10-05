import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { HeroSectionData } from "@/types/landing-page";

export default function HeroSection({ data }: { data: HeroSectionData }) {
  return (
    <section className="bg-gradient-to-b from-[#F5FBFF] to-white dark:from-slate-800/40 dark:to-slate-900 py-16">
      <div className="custom-container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-18 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent-light text-primary dark:bg-primary-900 dark:text-accent-primary rounded-full text-sm font-semibold mb-6">
              {data.badge}
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-[1.2]">{data.title.text} <span className="text-primary">{data.title.highlightText}</span></h1>
            <p className="text-[1.1rem] text-textSecondary leading-[1.8] mb-8">{data.description}</p>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap ">
              <Link href={data.buttons.primary.href} className="w-full md:w-auto">
                <Button size="xl" className="w-full">{data.buttons.primary.label}</Button>
              </Link>

              {data.buttons.secondary && (
                <Link href={data.buttons.secondary.href} target="_blank" className="w-full md:w-auto">
                  <Button variant="outline" size="xl" className="w-full">{data.buttons.secondary.label}</Button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <Image src={data.image.src} alt={data.image.alt} width={550} height={350} className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
