import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import logoImage from 'figma:asset/7a2f69ff05bfcb3dddecd9c253ecb4a17a02fd39.png';

export function WhyChooseSection() {
  const benefits = [
    "Proven Results",
    "Expert Team", 
    "Fast Delivery"
  ];

  return (
    <section 
      className="py-8"
      style={{ 
        background: 'linear-gradient(135deg, #EBF5E9 0%, #B6CFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Why Choose HumanEdge?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              HumanEdge delivers working AI prototypes that bridge the gap between abstract visions and user-validated solutions. Our proven methodology ensures your AI initiatives are both technically sound and human-centered.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EBF5E9' }}>
                    <Check className="w-4 h-4" style={{ color: '#22c55e' }} />
                  </div>
                  <span className="text-lg text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Infocepts Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-sm shadow-lg border-0" style={{ backgroundColor: 'white' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Powered by
                  </p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={logoImage} 
                      alt="Infocepts Data & AI" 
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                    21+ Years
                  </div>
                  <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    of AI & Data Innovation Excellence
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}