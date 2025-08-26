import { Card, CardContent } from "./ui/card";
import { Target, Brain, Lightbulb, Zap } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ClientFocusedSection() {
  const benefits = [
    {
      icon: Target,
      title: "Vision to Reality in 4 Weeks",
      description: "Working prototypes create immediate business alignment and unlock funding for AI initiatives."
    },
    {
      icon: Brain,
      title: "Enhance Possibilities Through AI Knowledge",
      description: "Our team of AI specialists transforms ideas into working prototypes—revealing business value you may not have imagined."
    },
    {
      icon: Lightbulb,
      title: "Enhanced Innovation",
      description: "Creative enhancements to core AI ideas drive increased use case value and alignment within the stakeholders."
    },
    {
      icon: Zap,
      title: "Accelerated Time-to-Market",
      description: "Reusable prototype components reduce time-to-market by up to 40%."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-16">
        <h2 className="text-4xl text-primary mb-16" style={{ fontFamily: 'Alexandria, sans-serif' }}>
          Precisely Delivers What Clients Are Looking For Today
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full" style={{ 
                    backgroundColor: index % 4 === 0 ? '#F8E1E3' : 
                                   index % 4 === 1 ? '#B6CFFF' : 
                                   index % 4 === 2 ? '#EBF5E9' : '#F8E1E3'
                  }}>
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg text-primary leading-tight" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-8">
          <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            We don't stop at prototyping. Our AI consulting team provides end-to-end guidance to help you seamlessly transition from concept to production, enabling rapid go-to-market (GTM) execution.
          </p>
          
          <div className="flex justify-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional team collaborating on AI solutions and digital transformation"
              className="rounded-lg shadow-lg max-w-4xl w-full h-64 object-cover p-[0px] m-[0px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}