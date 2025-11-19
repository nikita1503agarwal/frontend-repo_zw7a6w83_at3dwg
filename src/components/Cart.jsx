export default function Cart({ items, onClose, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="w-full sm:w-[420px] h-full bg-white shadow-xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-lg">Your Cart</h3>
          <button onClick={onClose} className="text-slate-600 hover:text-black">Close</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-600">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 border-b pb-3">
                {it.image && <img src={it.image} className="w-16 h-16 object-cover rounded" />}
                <div className="flex-1">
                  <p className="font-medium">{it.title}</p>
                  <p className="text-sm text-slate-600">Qty: {it.quantity}</p>
                </div>
                <div className="font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
