const About = () => {
  return (
    <section id="about" className="pt-20 pb-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            About StanLuxeProperty
          </h2>
          <p className="text-gold font-semibold">EXPERIENCE, NOT JUST PROPERTY</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              StanLuxeProperty is a premium short-stay and property management brand dedicated to delivering exceptional living experiences and reliable operational solutions within luxury residential environments.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our role is to manage the full short-stay experience from bookings and guest communication to housekeeping coordination and maintenance supervision — ensuring guests enjoy comfort and convenience, and property partners benefit from efficient, transparent operations.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At StanLuxeProperty, we are committed to professionalism, quality service, and long-term peace of mind and premium returns for our partners.
            </p>
          </div>

          {/* Partnership / Mission / Vision */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl text-primary">Our Partnership</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We operate in partnership with the award-winning Douglas Luxury Apartments, managing selected units across prime locations including East Legon, Shiashie, and Adenta as part of our short-stay portfolio. Through this collaboration, we provide professional hospitality services while maintaining the high standards associated with luxury apartment living.
            </p>

            <h3 className="font-heading text-2xl md:text-3xl text-primary">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To deliver premium short-stay experiences while maximizing property value through professional management and trusted partnerships.
            </p>

            <h3 className="font-heading text-2xl md:text-3xl text-primary">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become a leading hospitality management partner for luxury residential developments across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
