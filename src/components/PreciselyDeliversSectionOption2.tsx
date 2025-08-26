import { Card, CardContent } from "./ui/card";

export function PreciselyDeliversSectionOption2() {
  const deliverables = [
    {
      number: "01",
      title: "Vision to Reality in 4 Weeks",
      description: "Working prototypes create immediate business alignment and unlock funding for AI initiatives"
    },
    {
      number: "02", 
      title: "Enhance possibilities through AI knowledge",
      description: "Our team of AI specialists transforms ideas into working prototypes-revealing business value you may not have imagined"
    },
    {
      number: "03",
      title: "Enhanced Innovation", 
      description: "Creative enhancements to core AI ideas drive increased use case value and alignment within the stakeholders"
    },
    {
      number: "04",
      title: "Accelerated Time-to-Market",
      description: "Reusable prototype components reduce time-to-market by up to 40%"
    }
  ];

  return (
    <section 
      className="py-20 px-6"
      style={{
        background: 'linear-gradient(135deg, #F8E1E3 0%, #B6CFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl text-primary mb-6" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              Precisely delivers what clients are looking for today
            </h2>
          </div>
          
          {/* Grid Layout Option */}
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-10 h-full">
                  <div className="space-y-6 h-full flex flex-col">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                          {item.number}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl text-primary flex-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg flex-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}