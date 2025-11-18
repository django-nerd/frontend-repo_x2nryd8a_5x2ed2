export default function CompanyPartners() {
  const partners = ['Brand A','Brand B','Brand C','Brand D']
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Partners</h1>
        <p className="text-blue-200/85 mt-2">Tecnología y fabricantes aliados.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {partners.map(p => (
            <div key={p} className="rounded-xl border border-blue-500/20 bg-black/40 p-6 text-center text-blue-200/80">{p}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
