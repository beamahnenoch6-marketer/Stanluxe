import heroImage from "@/assets/hero-apartment.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-primary/50 -z-10" />
      
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <img src={logo} alt="BaileyPrimeStay" className="h-10 md:h-14 w-auto rounded-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-4">
          Book a Stay in
          <br />
          <span className="text-gold">Accra's Best</span>
        </h1>
        <p className="text-sm md:text-base text-white/90 font-light max-w-2xl mx-auto mb-8">
          Explore a curated selection of short-stay apartments managed by BaileyPrimeStay within the Douglas Luxury Apartments portfolio.
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={() => scrollToSection("contact")}
          size="lg" 
          className="bg-gold hover:bg-gold-light text-primary font-semibold px-10 py-6 text-lg rounded-none"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
