export default function SolutionsBusiness() {
  const verticals = [
    {id:'hospitality', title:'Hospitality', desc:'Experiencia del huésped, control centralizado y ahorros del 20–30% en climatización.'},
    {id:'commercial', title:'Commercial/Office', desc:'Salas de conferencias, redes y control de acceso.'},
    {id:'industrial', title:'Industrial', desc:'Monitoreo, seguridad y comunicaciones robustas.'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Soluciones para Negocios</h1>
        <p className="text-blue-200/80 mt-2">Productividad, eficiencia y operación simplificada.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {verticals.map(v => (
            <a key={v.id} id={v.id} href={`#${v.id}`} className="rounded-xl border border-blue-500/20 bg-black/40 p-5 block">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-blue-200/80 mt-1 text-sm">{v.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
