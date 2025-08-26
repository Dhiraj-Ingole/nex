import { Target, Lightbulb, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function PreciselyDeliversSection() {
  const deliverables = [
    {
      icon: Target,
      title: "Vision to Reality in 4 Weeks",
      description: "Working prototypes create immediate business alignment and unlock funding for AI initiatives."
    },
    {
      icon: Lightbulb,
      title: "Enhance Possibilities Through AI Knowledge",
      description: "Our team of AI specialists transforms ideas into working prototypes—revealing business value you may not have imagined."
    },
    {
      icon: Zap,
      title: "Enhanced Innovation",
      description: "Creative enhancements to core AI ideas drive increased use case value and alignment within the stakeholders."
    },
    {
      icon: Clock,
      title: "Accelerated Time-to-Market",
      description: "Reusable prototype components reduce time-to-market by up to 40%."
    }
  ];

  const pastelColors = [
    '#F8E1E3', // Light pink
    '#B6CFFF', // Light blue  
    '#EBF5E9', // Soft green
    '#F0F4FF'  // Light purple
  ];

  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #FFE8E8 0%, #E8F4FF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-left max-w-4xl">
            <h2 className="text-4xl text-primary mb-6" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Precisely Delivers What Clients Are Looking For Today
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Our proven methodology consistently delivers measurable business value through human-centered AI innovation.
            </p>
          </div>
          
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center space-y-6 h-full flex flex-col">
                    {/* Icon Circle */}
                    <div className="flex justify-center">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: pastelColors[index] }}
                      >
                        <IconComponent 
                          className="w-8 h-8 text-primary" 
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl text-primary leading-tight"
                      style={{ fontFamily: 'Alexandria, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-gray-600 text-sm leading-relaxed flex-1"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}