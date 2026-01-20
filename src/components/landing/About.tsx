const About = () => {
  return (
    <section id="about" className="pt-20 pb-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            About BaileyPrimeStay
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              BaileyPrimeStay is a short-stay co-hosting and property management brand focused on delivering well-managed, comfortable, and reliable Airbnb experiences.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We specialize in the day-to-day management of short-stay apartments ensuring each space is properly prepared, cleaned, well presented, secured, and consistently maintained for guest comfort. Our approach is structured, calm, and detail-driven, allowing guests to enjoy a smooth and stress-free stay from check-in to check-out.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At BaileyPrimeStay, we prioritize clear communication, professionalism, thoughtful presentation, and operational consistency. Every stay is managed with respect for both guests and property owners.
            </p>
          </div>

          {/* Partnership Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl text-primary">
              Our Partnership
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              BaileyPrimeStay currently operates in partnership with Award winning Douglas Luxury Apartments, managing select units in East Legon, Shiashie, Adenta and more as part of our short-stay portfolio.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Through this partnership, we oversee guest experience, coordination, and operational standards to ensure each apartment meets our quality expectations and delivers a comfortable short-stay experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
