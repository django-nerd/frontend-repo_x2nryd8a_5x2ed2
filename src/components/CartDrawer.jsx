export default function CartDrawer({ open, items, onClose, onCheckout, onQtyChange, onRemove }) {
  const subtotal = items.reduce((sum, it) => sum + it.quantity * it.unit_price, 0)

  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/60 transition ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-950 border-l border-blue-500/20 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-16 px-4 border-b border-blue-500/20 flex items-center justify-between">
          <h3 className="text-white font-semibold">Your Order</h3>
          <button onClick={onClose} className="text-blue-200 hover:text-white">Close</button>
        </div>
        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-8rem)]">
          {items.length === 0 ? (
            <p className="text-blue-200/70">Your order is empty.</p>
          ) : (
            items.map((it) => (
              <div key={it.product_id} className="flex gap-3 items-center bg-black/40 rounded-lg p-3 border border-blue-500/20">
                <div className="flex-1">
                  <div className="text-white font-medium">{it.name}</div>
                  <div className="text-blue-300 text-sm">${it.unit_price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onQtyChange(it.product_id, Math.max(1, it.quantity - 1))} className="px-2 py-1 bg-white/10 text-white rounded">-</button>
                  <span className="w-8 text-center text-white">{it.quantity}</span>
                  <button onClick={() => onQtyChange(it.product_id, it.quantity + 1)} className="px-2 py-1 bg-white/10 text-white rounded">+</button>
                </div>
                <button onClick={() => onRemove(it.product_id)} className="text-red-400 hover:text-red-300 text-sm">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="h-16 px-4 border-t border-blue-500/20 flex items-center justify-between">
          <div className="text-blue-200">Subtotal</div>
          <div className="text-white font-semibold">${subtotal.toFixed(2)}</div>
        </div>
        <div className="p-4">
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold"
          >
            Place order
          </button>
        </div>
      </aside>
    </div>
  )
}
