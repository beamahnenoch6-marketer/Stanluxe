import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import apartment1 from "@/assets/featured/Apartments_6.jpg";
import apartment2 from "@/assets/featured/Apartments_7.jpg";
import apartment3 from "@/assets/featured/Apartments_8.jpg";
import apartment9 from "@/assets/featured/Apartments_9.jpg";
import apartment10 from "@/assets/featured/Apartments_10.jpg";
import apartment11 from "@/assets/featured/Apartments_11.jpg";
import apartment12 from "@/assets/featured/Apartments_12.jpg";
import apartment13 from "@/assets/featured/Apartments_13.jpg";
import apartment14 from "@/assets/featured/Apartments_14.jpg";
import apartment15 from "@/assets/featured/Apartments_15.jpg";
import apartment16 from "@/assets/featured/Apartments_16.jpg";


const images = [
  { id: 1, src: apartment1, alt: "Featured apartment 1" },   
  { id: 2, src: apartment2, alt: "Featured apartment 2" },   
  { id: 3, src: apartment3, alt: "Featured apartment 3" },   
  { id: 4, src: apartment9, alt: "Featured apartment 4" },   
  { id: 5, src: apartment10, alt: "Featured apartment 5" },   
  { id: 6, src: apartment11, alt: "Featured apartment 6" },   
  { id: 7, src: apartment12, alt: "Featured apartment 7" },   
  { id: 8, src: apartment13, alt: "Featured apartment 8" },   
  { id: 9, src: apartment14, alt: "Featured apartment 9" },   
  { id: 10, src: apartment15, alt: "Featured apartment 10" },   
  { id: 11, src: apartment16, alt: "Featured apartment 11" },   
];

// Duplicate images for seamless infinite loop
const duplicatedImages = [...images, ...images, ...images, ...images];

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
    const speed = 1.9; // Pixels per frame

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
                <div className="aspect-[4/4] overflow-hidden border-2 border-transparent">
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
