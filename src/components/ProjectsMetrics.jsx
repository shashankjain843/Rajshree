import { Truck, MapPin, Factory, Award } from 'lucide-react';

export default function ProjectsMetrics() {
  const metrics = [
    {
      icon: <Truck className="w-6 h-6 text-blue-700" />,
      value: '25,000+ KM',
      label: 'HDPE Pipe Supplied',
      subtext: '[TODO: replace with real data]'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-700" />,
      value: '12+ States',
      label: 'Pan-India Distribution',
      subtext: '[TODO: replace with real data]'
    },
    {
      icon: <Factory className="w-6 h-6 text-blue-700" />,
      value: '10,000 MT',
      label: 'Annual Extrusion Output',
      subtext: '[TODO: replace with real data]'
    },
    {
      icon: <Award className="w-6 h-6 text-blue-700" />,
      value: '15+ Years',
      label: 'Manufacturing Excellence',
      subtext: '[TODO: replace with real data]'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-100">
            Projects Delivered &amp; Supply Metrics
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            High-Volume Extrusion for Pan-India Utilities
          </h2>
          <p className="text-slate-600 text-sm font-light mt-2">
            Demonstrated industrial delivery capacity across municipal potable networks, Jal Jeevan Mission, and industrial effluent pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:border-slate-300 transition-all space-y-2"
            >
              <div className="p-2.5 bg-blue-50 rounded-xl w-fit border border-blue-100 mb-3">
                {metric.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {metric.value}
              </p>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {metric.label}
              </h3>
              <span className="inline-block text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-mono">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
