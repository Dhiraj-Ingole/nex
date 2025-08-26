import { Button } from "./ui/button";
import heroBackground from "figma:asset/583c9a70e8e050d8cb8aa016f55b0a23b6e7466d.png";

export function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-start"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px'
      }}
    >
      {/* Subtle overlay for better text readability while preserving the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-left">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              HumanEdge
            </h1>
            <h2 className="text-3xl text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Transforming AI Ideas Rapidly into Human-Centered Prototypes
            </h2>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Our revolutionary <span className="font-semibold text-primary">#JustFourWeeks</span> rapid prototyping service is built for prospects seeking tangible results in weeks, not months.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg rounded-full text-white font-semibold bg-black hover:bg-[#DF443A] transition-colors shadow-lg uppercase"
              style={{ 
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
              Get Started Today
            </Button>
          </div>
        </div>
        </div>
      </div>

    </section>
  );
}