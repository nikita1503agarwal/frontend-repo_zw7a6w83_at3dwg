export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      {product.image && (
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button onClick={() => onAdd(product)} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
