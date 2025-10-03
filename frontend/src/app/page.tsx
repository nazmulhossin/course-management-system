import FAQ from "@/components/landing/FAQ";
import FeaturedCourses from "@/components/landing/FeaturedCourses";
import HeroSection from "@/components/landing/HeroSection";
import Testimonials from "@/components/landing/Testimonials";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="bg-bgPrimary text-textPrimary">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
