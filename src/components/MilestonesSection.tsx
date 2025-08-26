import { Card, CardContent } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function MilestonesSection() {
  const milestones = [
    {
      week: "Week 1",
      title: "Vision Alignment",
      progress: 25,
      description: "Understand client AI vision, use cases, personas, and tech stack. Deliverable: Agreement on scope and outcomes."
    },
    {
      week: "Week 2",
      title: "First Iteration",
      progress: 50,
      description: "Develop and review low-to-mid fidelity prototype concepts. Deliverable: Wireframes and workflows."
    },
    {
      week: "Week 4",
      title: "Final Delivery",
      progress: 100,
      description: "Finalize the prototype with innovation elements. Deliverable: Complete AI application prototype with synthetic data."
    }
  ];

  const getChartColor = (progress) => {
    if (progress === 25) return '#F8E1E3';
    if (progress === 50) return '#B6CFFF';
    return '#EBF5E9';
  };

  const getChartData = (progress) => [
    { value: progress, color: getChartColor(progress) },
    { value: 100 - progress, color: '#f3f4f6' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-12">
        <h2 className="text-4xl text-primary mb-16" style={{ fontFamily: 'Alexandria, sans-serif' }}>
          HumanEdge Rapid Milestones
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="h-full shadow-lg border-0 overflow-hidden">
              <div 
                className="h-2"
                style={{ backgroundColor: getChartColor(milestone.progress) }}
              />
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-sm font-semibold text-gray-500" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {milestone.week}
                  </span>
                  
                  <div className="w-24 h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={getChartData(milestone.progress)}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={45}
                          startAngle={90}
                          endAngle={450}
                          paddingAngle={0}
                          dataKey="value"
                        >
                          {getChartData(milestone.progress).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    
                    {/* Center text */}
                    <div className="relative -mt-24 flex items-center justify-center h-24">
                      <span className="text-sm font-semibold text-primary" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {milestone.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                  {milestone.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {milestone.description}
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