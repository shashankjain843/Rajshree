export default function ClientLogos() {
  const clients = [
    { name: 'Jal Jeevan Mission (JJM)', tag: 'Rural Water Supply' },
    { name: 'PHED Rajasthan', tag: 'Public Health Eng. Dept.' },
    { name: 'PWD Infrastructure', tag: 'State Highway Drainage' },
    { name: 'Municipal Corporations', tag: 'Urban Stormwater & Sewerage' },
    { name: 'RIICO Industrial Units', tag: 'Effluent & Industrial Conduits' },
    { name: 'State Agricultural Boards', tag: 'Sprinkler Irrigation Networks' },
  ];

  return (
    <section className="bg-slate-900 text-slate-300 py-10 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-6">
          Trusted Utility Supplier For State &amp; National Infrastructure Projects
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-xl flex flex-col justify-center items-center text-center shadow-xs"
            >
              <span className="text-xs font-bold text-white tracking-tight">
                {client.name}
              </span>
              <span className="text-[10px] text-amber-400 font-medium mt-1">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
