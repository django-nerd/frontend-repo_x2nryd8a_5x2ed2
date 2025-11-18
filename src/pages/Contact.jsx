export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-blue-200/85 mt-2">New York • Miami • Aruba</p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-blue-500/20 bg-black/40 p-6 space-y-3">
            <div>
              <div className="text-sm text-blue-300/80">Phone</div>
              <div className="text-white">+1 917 402 9825, +1 267 968 2408</div>
            </div>
            <div>
              <div className="text-sm text-blue-300/80">Email</div>
              <div className="text-white">info@intelcogroup.com</div>
            </div>
            <div>
              <div className="text-sm text-blue-300/80">Social</div>
              <div className="text-white">Facebook • Twitter • Instagram</div>
            </div>
          </div>
          <form className="rounded-xl border border-blue-500/20 bg-black/40 p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200/90 mb-1">Nombre</label>
              <input className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/90 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/90 mb-1">Interés</label>
              <select className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white">
                <option>Hogar</option>
                <option>Negocio</option>
                <option>Hospitality</option>
                <option>Soporte</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-blue-200/90 mb-1">Mensaje</label>
              <textarea rows="4" className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" />
            </div>
            <button type="button" className="w-full py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
