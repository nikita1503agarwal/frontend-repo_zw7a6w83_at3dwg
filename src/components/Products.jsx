import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts, seedDemoProducts } from '../lib/api'

export default function Products({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const list = await fetchProducts()
      if (!list || list.length === 0) {
        // seed once if empty
        await seedDemoProducts()
        const seeded = await fetchProducts()
        setProducts(seeded)
      } else {
        setProducts(list)
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  if (loading) return <div className="text-center py-10">Loading products...</div>
  if (error) return (
    <div className="text-center py-10 text-red-600">
      Failed to load products. {error}
    </div>
  )

  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Latest iPhones</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id || p._id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
