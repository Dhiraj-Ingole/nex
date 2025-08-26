import { Button } from "./ui/button";

export function FinalCTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#EBF5E9' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Ready to go from idea to impact?
            </h2>
            
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Let HumanEdge bring your AI vision to life – in just four weeks.
            </p>
          </div>
          
          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <Button 
              size="lg" 
              className="px-12 py-4 rounded-full"
              style={{ fontFamily: 'Alexandria, sans-serif' }}
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}