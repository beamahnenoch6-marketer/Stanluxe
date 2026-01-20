import apartment1 from "@/assets/apartment-1.jpg";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              Contact Us Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Douglas Luxury Apartments, we pride ourselves on delivering exceptional service and a seamless booking experience. Whether you're traveling for business or leisure, our team is dedicated to ensuring your stay is comfortable and memorable.
            </p>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 rounded-none"
            >
              Inquire Now
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-elegant">
              <img
                src={apartment1}
                alt="Luxury apartment interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
