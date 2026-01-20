import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import FeaturedApartments from "@/components/landing/FeaturedApartments";
import Contact from "@/components/landing/Contact";
import FeaturedGallery from "@/components/landing/FeaturedGallery";
import Amenities from "@/components/landing/Amenities";
import Discover from "@/components/landing/Discover";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <About />
      <FeaturedApartments />
      <Contact />
      <FeaturedGallery />
      <Amenities />
      <Discover />
      <Footer />
    </div>
  );
};

export default Index;
