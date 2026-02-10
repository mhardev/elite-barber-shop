import HomeSection from "@/components/hero-section";
import ServiceSection from "@/components/features-1";
import AboutSection from "@/components/content-3";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import LocationSection from "@/components/location";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <LocationSection/>
      <Footer />
    </>
  );
}