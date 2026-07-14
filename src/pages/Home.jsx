import AboutPreview from "../components/AboutPreview/AboutPreview";
import CoreServices from "../components/CoreServices/CoreServices";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <AboutPreview />

      <WhyChooseUs />

      <CoreServices />

      <CTA />
    </main>
  );
};

export default Home;
