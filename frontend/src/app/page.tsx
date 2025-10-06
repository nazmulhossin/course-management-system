import FAQ from "@/components/landing/FAQ";
import FeaturedCourses from "@/components/landing/FeaturedCourses";
import HeroSection from "@/components/landing/HeroSection";
import Testimonials from "@/components/landing/Testimonials";
import WhatWeOffer from "@/components/landing/WhatWeOffer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getLandingPageData } from "@/lib/api/landing-page";

export default async function Home() {
  const landingData = await getLandingPageData();
  console.log(landingData);

  return (
    <div className="bg-bgPrimary text-textPrimary">
      <Header />
      <main>
        <HeroSection data={landingData.heroSectionData} />
        <FeaturedCourses />
        <WhatWeOffer services={landingData.services} />
        <Testimonials testimonials={landingData.testimonials} />
        <FAQ faqs={landingData.faqs} />
      </main>
      <Footer />
    </div>
  );
}
