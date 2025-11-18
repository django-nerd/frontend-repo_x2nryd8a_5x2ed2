import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_280px_at_top,rgba(37,99,235,0.20),transparent)]" />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Integración de Sistemas en Seguridad, Automatización y Comunicaciones
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg">
              Soluciones llave en mano para hogares y negocios desde 1998. Diseñamos, instalamos y damos soporte a tecnología confiable que simplifica la operación y eleva la experiencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solutions/home" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow shadow-blue-600/30">Soluciones para el Hogar</Link>
              <Link to="/solutions/business" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold">Soluciones para Negocios</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-black/40 p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-blue-300/70">
              Visual de tecnología integrada (video/imagen)
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6">Qué hacemos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Seguridad',desc:'CCTV, alarmas, control de acceso y monitoreo 24/7.'},
            {title:'Automatización',desc:'Iluminación, clima, escenas y eficiencia energética.'},
            {title:'Comunicaciones/Networking',desc:'Redes cableadas e inalámbricas robustas y seguras.'},
          ].map((b)=> (
            <div key={b.title} className="rounded-xl border border-blue-500/20 bg-black/40 p-5">
              <h3 className="font-semibold text-white">{b.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6">Verticales B2B</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Hospitality',desc:'Habitaciones inteligentes y ahorros de 20–30% en HVAC.',to:'/solutions/business#hospitality'},
            {title:'Commercial/Office',desc:'Salas de conferencias, redes, control de acceso.',to:'/solutions/business#commercial'},
            {title:'Industrial',desc:'Monitoreo, seguridad y comunicaciones robustas.',to:'/solutions/business#industrial'},
          ].map((c)=> (
            <Link to={c.to} key={c.title} className="rounded-xl border border-blue-500/20 bg-black/40 p-5 hover:bg-white/10 transition block">
              <h3 className="font-semibold text-white">{c.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-blue-500/20 bg-black/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Compromiso Ecológico</h3>
            <p className="text-blue-200/80 mt-1 text-sm">Soluciones con fabricantes ISO 14001:2004 y apoyo a certificación LEED.</p>
          </div>
          <Link to="/company/green" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold">Conocer más</Link>
        </div>
      </section>
    </div>
  )
}
