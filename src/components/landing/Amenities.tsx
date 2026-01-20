import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import { Button } from "@/components/ui/button";

const amenities = [
  {
    id: 1,
    image: apartment1,
    title: "Bedroom",
    description: "Relax in style",
  },
  {
    id: 2,
    image: apartment2,
    title: "Bathroom",
    description: "Experience the ultimate in comfort and care",
  },
  {
    id: 3,
    image: apartment1,
    title: "Douglas & Stayy Juey",
    description: "Coalition Rental in local Legomen Gorly Artliners Succeedals",
    highlight: true,
    phone: "0503650656",
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
    <section className="py-16 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Amenities and Features
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Enjoy a range of thoughtful amenities and luxurious features in our apartments, including high-quality furnishings
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="bg-cream p-4 text-center"
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
                <Button 
                  size="sm"
                  className="bg-gold hover:bg-gold-light text-primary text-xs font-semibold rounded-none px-4"
                >
                  {item.phone}
                </Button>
              ) : (
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-gold text-primary hover:bg-gold/10 text-xs rounded-none px-4"
                >
                  {item.id === 1 ? "Learn More" : item.id === 2 ? "Explore Now" : "Partner with us"}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Book Your Stay Button */}
        <div className="text-center mt-10">
          <Button 
            onClick={() => scrollToSection("booking")}
            className="bg-primary border border-white/20 hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-none"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
