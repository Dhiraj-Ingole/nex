export function PreciselyDeliversSectionOption3() {
  const deliverables = [
    {
      number: "1",
      title: "Vision to Reality in 4 Weeks",
      description: "Working prototypes create immediate business alignment and unlock funding for AI initiatives"
    },
    {
      number: "2", 
      title: "Enhance possibilities through AI knowledge",
      description: "Our team of AI specialists transforms ideas into working prototypes-revealing business value you may not have imagined"
    },
    {
      number: "3",
      title: "Enhanced Innovation", 
      description: "Creative enhancements to core AI ideas drive increased use case value and alignment within the stakeholders"
    },
    {
      number: "4",
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
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16">
          <h2 className="text-4xl text-primary mb-8" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            Precisely delivers what clients are looking for today
          </h2>
          
          {/* Minimalist Step Layout Option */}
          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <span className="text-xl font-bold" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                          {item.number}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl text-primary group-hover:text-primary/80 transition-colors duration-300" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Optional arrow for next step */}
                    {index < deliverables.length - 1 && (
                      <div className="flex-shrink-0 hidden md:block">
                        <div className="w-8 h-8 text-primary/40 group-hover:text-primary/60 transition-colors duration-300">
                          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < deliverables.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-white/40"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}