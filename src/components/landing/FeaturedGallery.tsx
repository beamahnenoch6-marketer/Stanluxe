import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import heroImage from "@/assets/hero-apartment.jpg";

const images = [
  { id: 1, src: apartment1, alt: "Featured apartment 1" },
  { id: 2, src: apartment2, alt: "Featured apartment 2" },
  { id: 3, src: heroImage, alt: "Featured apartment 3" },
  { id: 4, src: apartment3, alt: "Featured apartment 4" },
];

// Duplicate images for seamless infinite loop
const duplicatedImages = [...images, ...images, ...images];

const FeaturedGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: true,
    dragFree: true,
    containScroll: false,
  });

  // Smooth continuous scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    let animationId: number;
    const speed = 0.2; // Pixels per frame

    const animate = () => {
      if (!emblaApi) return;
      
      const engine = emblaApi.internalEngine();
      const location = engine.location.get();
      engine.location.set(location - speed);
      engine.target.set(engine.location.get());
      engine.scrollLooper.loop(-1);
      engine.slideLooper.loop();
      engine.translate.to(engine.location.get());
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [emblaApi]);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Featured Apartments
          </h2>
          <p className="text-muted-foreground text-sm">
            Discover our collection of beautifully appointed short-stay apartments
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-none w-1/2 md:w-1/4 px-2 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden border-2 border-transparent">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
