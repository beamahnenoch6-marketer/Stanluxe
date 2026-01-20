import apartment5 from "@/assets/apartment-5.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import apartment4 from "@/assets/apartment-4.jpg";

const apartments = [
  {
    id: 1,
    image: apartment5,
    title: "Douglas Luxury East Legon",
    location: "6 apartments",
  },
  {
    id: 2,
    image: apartment2,
    title: "Douglas Luxury Shiashie",
    location: "4 apartments",
  },
  {
    id: 3,
    image: apartment4,
    title: "Douglas Luxury Adenta",
    location: "5 apartments",
  },
  {
    id: 4,
    image: apartment3,
    title: "Douglas Satey Rectner",
    location: "10 suites",
  },
];

const FeaturedApartments = () => {
  return (
    <section id="apartments" className="pt-10 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Explore Our Apartments
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our apartments feature modern amenities, spacious layouts, and stunning views
          </p>
        </div>

        {/* Apartment Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apartments.map((apt) => (
            <div key={apt.id} className="cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden border-2 border-transparent">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-primary text-sm">{apt.title}</h3>
                <p className="text-muted-foreground text-xs">{apt.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApartments;
