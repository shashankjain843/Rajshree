export default function ClientLogos() {
  const clients = [
    { name: 'Jal Jeevan Mission (JJM)', tag: 'Rural Water Supply', icon: '💧' },
    { name: 'PHED Rajasthan', tag: 'Public Health Eng. Dept.', icon: '🏛️' },
    { name: 'PWD Infrastructure', tag: 'State Highway Drainage', icon: '🛣️' },
    { name: 'Municipal Corporations', tag: 'Urban Stormwater & Sewerage', icon: '🌆' },
    { name: 'RIICO Industrial Units', tag: 'Effluent & Industrial Conduits', icon: '🏭' },
    { name: 'State Agricultural Boards', tag: 'Sprinkler Irrigation Networks', icon: '🌾' },
  ];

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="bg-slate-900 text-slate-300 py-10 border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
          Trusted Utility Supplier For State &amp; National Infrastructure Projects
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap w-max">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-slate-800/80 border border-slate-700/60 px-5 py-3.5 rounded-xl shrink-0 hover:border-sky-400/40 hover:bg-slate-800 transition-all duration-200 cursor-default"
            >
              <span className="text-xl">{client.icon}</span>
              <div className="text-left">
                <span className="block text-xs font-bold text-white tracking-tight">
                  {client.name}
                </span>
                <span className="block text-[10px] text-amber-400 font-medium mt-0.5">
                  {client.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
