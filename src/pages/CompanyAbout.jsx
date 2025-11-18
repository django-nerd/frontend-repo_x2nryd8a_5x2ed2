export default function CompanyAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-blue-200/85 mt-2">Compañía de integración de servicio completo, en el negocio desde 1998, con presencia en Nueva York, Miami, Aruba y Venezuela.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="rounded-xl border border-blue-500/20 bg-black/40 p-5">
            <h3 className="font-semibold">Misión</h3>
            <p className="text-blue-200/80 mt-1 text-sm">Liderar en soluciones de ingeniería y tecnología ofreciendo eficiencia, efectividad y calidad.</p>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-black/40 p-5">
            <h3 className="font-semibold">Valores</h3>
            <p className="text-blue-200/80 mt-1 text-sm">Integridad, Honestidad, Calidad, Tecnología y Buen Servicio.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
