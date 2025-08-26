import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Target, BarChart } from "lucide-react";

export function MethodologySection() {
  const methods = [
    {
      icon: Lightbulb,
      title: "Agile Methodology",
      description: "Iterative development with continuous feedback loops for optimal results."
    },
    {
      icon: Users,
      title: "Best-in-class",
      description: "Our expert teams use industry-leading practices and proven methodologies."
    },
    {
      icon: Target,
      title: "Human-Centered Design",
      description: "Every solution is designed with the end user's experience at the forefront."
    },
    {
      icon: BarChart,
      title: "Production-Ready Results",
      description: "Scalable solutions built for immediate deployment and long-term success."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            Why Our Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Built on 15+ years of AI and data science experience and backed with the industry's best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-blue-100">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}