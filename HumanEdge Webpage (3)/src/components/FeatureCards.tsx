import { Card, CardContent } from "./ui/card";
import { Clock, Users, Code } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Clock,
      title: "4–5 Week Sprint",
      description:
        "Rapid prototyping timeline that compresses traditional design processes by 30–50%.",
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description:
        "Putting real people and real problems at the core of AI innovations using inclusive design principles.",
    },
    {
      icon: Code,
      title: "Reusable Code & Components",
      description:
        "Prototype designs transfer directly to final builds, reducing engineering efforts by up to 40%.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          <h2
            className="text-4xl text-primary mb-8"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            What is HumanEdge?
          </h2>

          <div className="mb-12">
            <p
              className="text-lg text-gray-600 max-w-4xl"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              HumanEdge delivers working AI application
              prototypes that bridge the gap between abstract
              visions and tangible, user-validated solutions
              that address real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderColor: "#D7E1EC",
                  backgroundColor: "#F8FAFC",
                  borderWidth: "1px",
                }}
              >
                <CardContent className="p-8 text-center space-y-6 rounded-[30px]">
                  <div className="flex justify-center">
                    <div
                      className="p-4 rounded-full"
                      style={{ backgroundColor: "#E4F0FF" }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3
                    className="text-xl text-primary"
                    style={{
                      fontFamily: "Alexandria, sans-serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}