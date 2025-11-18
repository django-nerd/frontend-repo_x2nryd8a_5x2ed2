export default function SolutionsHome() {
  const items = [
    {title:'Automation',desc:'Control de persianas, ventanas, temperatura y escenas.'},
    {title:'Audio/Video',desc:'Video distribuido y sonido multi-habitación.'},
    {title:'Lighting',desc:'Iluminación inteligente y persianas motorizadas.'},
    {title:'Climate',desc:'Control de termostato desde dispositivos móviles.'},
    {title:'Security',desc:'CCTV, alarmas y monitoreo.'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Soluciones para el Hogar</h1>
        <p className="text-blue-200/80 mt-2">Confort, seguridad y eficiencia con tecnología integrada.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(i => (
            <div key={i.title} className="rounded-xl border border-blue-500/20 bg-black/40 p-5">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="text-blue-200/80 mt-1 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
