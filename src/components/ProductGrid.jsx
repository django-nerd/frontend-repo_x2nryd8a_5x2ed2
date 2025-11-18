export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p._id} className="group bg-black/40 border border-blue-500/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
            {p.image_url ? (
              <img src={p.image_url} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-blue-300/50 text-sm">No image</div>
            )}
          </div>
          <div className="p-4">
            <h4 className="text-white font-semibold mb-1 line-clamp-1">{p.name}</h4>
            <p className="text-blue-200/70 text-sm line-clamp-2 min-h-[2.5rem]">{p.description || '—'}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-blue-300 font-semibold">${p.price?.toFixed?.(2) ?? p.price}</span>
              <button
                onClick={() => onAddToCart(p)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm transition"
              >
                Add to order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
