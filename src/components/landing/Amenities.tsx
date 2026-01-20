import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import { Button } from "@/components/ui/button";

const amenities = [
    {
    id: 2,
    image: apartment2,
      title: "Contact StanLuxeProperty",
      description: "Get in touch for bookings, partnerships, and enquiries.",
      highlight: true,
      phone: "+233502437351",
      email: "Stanluxeapartement@gmail.com",
    
  },
  {
    id: 4,
    image: apartment2,
    title: "Our Trusted Partners",
    description: "Discover our trusted partner Douglas Luxury Apartments",
  },
];

const Amenities = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Amenities and Features
          </h2>
          <p className="text-white/90 text-sm max-w-xl mx-auto">
            Enjoy a range of thoughtful amenities and luxurious features in our apartments, including high-quality furnishings
          </p>
        </div>

        {/* Amenities Grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center justify-center">
          <br />
          {amenities.map((item) => (
            <div
              key={item.id}
              className="bg-cream p-4 text-center w-full max-w-xs"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gold">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs mb-3">{item.description}</p>
              {item.highlight ? (
                <div className="flex items-center justify-center gap-2">
                  <Button asChild size="sm" className="bg-gold hover:bg-gold-light text-white text-xs font-semibold rounded-none px-4">
                    <a href={`https://wa.me/${item.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>

                  <Button asChild size="sm" className="bg-gold hover:bg-gold-light text-white text-xs font-semibold rounded-none px-4">
                    <a href={`mailto:${item.email}`} target="_blank" rel="noopener noreferrer">
                      Email
                    </a>
                  </Button>
                </div>
              ) : (
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-gold text-brown hover:bg-gold/10 text-xs rounded-none px-4"
                >
                  {item.id === 1 ? "Learn More" : item.id === 2 ? "Explore Now" : "Partner with us"}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Book Your Stay Button */}
        <div className="text-center mt-10">
          <Button asChild className="bg-gold border border-white/20 hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-none">
            <a href="https://wa.me/233502437351" target="_blank" rel="noopener noreferrer">Book Your Stay</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
