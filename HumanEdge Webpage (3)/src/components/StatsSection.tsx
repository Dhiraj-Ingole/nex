export function StatsSection() {
  const stats = [
    {
      number: "15+",
      label: "YEARS",
      subtitle: "Experience in Data & AI Solutions"
    },
    {
      number: "98%",
      label: "Success Rate",
      subtitle: ""
    },
    {
      number: "40%",
      label: "Faster GTM",
      subtitle: ""
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Alexandria, sans-serif' }}>
              End-to-End AI Transformation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              We don't take on prototyping: But do everything related work. From providing consultancy innovation 
              discovery to support implementation, we do all of it
            </p>
          </div>

          {/* Right Side - KPIs in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Row */}
            <div className="text-center p-4 rounded-lg shadow-lg border border-gray-100" style={{ backgroundColor: 'var(--brand-light-pink)' }}>
              <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                15+
              </div>
              <div className="text-sm font-semibold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                YEARS
              </div>
              <div className="text-xs text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Experience in Data & AI Solutions
              </div>
            </div>

            <div className="text-center p-4 rounded-lg shadow-lg border border-gray-100" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
              <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                98%
              </div>
              <div className="text-sm font-semibold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                Success Rate
              </div>

            </div>

            {/* Bottom Row */}
            <div className="text-center p-4 rounded-lg shadow-lg border border-gray-100" style={{ backgroundColor: 'var(--brand-soft-green)' }}>
              <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                40%
              </div>
              <div className="text-sm font-semibold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                Faster GTM
              </div>

            </div>

            <div className="text-center p-4 rounded-lg shadow-lg border border-gray-100" style={{ backgroundColor: '#F0F4FF' }}>
              <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                24/7
              </div>
              <div className="text-sm font-semibold text-primary mb-1" style={{ fontFamily: 'Alexandria, sans-serif' }}>
                Support
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}