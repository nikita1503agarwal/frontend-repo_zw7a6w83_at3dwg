import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'
import { createOrder } from './lib/api'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [placing, setPlacing] = useState(false)
  const [notice, setNotice] = useState('')

  const addToCart = (product) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.id === product.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 }
        return copy
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const checkout = async () => {
    try {
      setPlacing(true)
      setNotice('')
      const items = cart.map(c => ({ product_id: c.id, quantity: c.quantity }))
      const orderId = await createOrder({
        items,
        customer: {
          name: 'Guest',
          email: 'guest@example.com',
          address: 'N/A'
        }
      })
      setNotice(`Order placed successfully. ID: ${orderId}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      setNotice(`Checkout failed: ${e.message}`)
    } finally {
      setPlacing(false)
    }
  }

  useEffect(() => {
    if (notice) {
      const t = setTimeout(() => setNotice(''), 4000)
      return () => clearTimeout(t)
    }
  }, [notice])

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.reduce((s,p)=>s+p.quantity,0)} onViewCart={() => setCartOpen(true)} />
      <Hero />
      {notice && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4">{notice}</div>
        </div>
      )}
      <Products onAdd={addToCart} />
      {cartOpen && (
        <Cart items={cart} onClose={() => setCartOpen(false)} onCheckout={checkout} loading={placing} />
      )}

      <footer id="about" className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-600">
          <p>Not affiliated with Apple. Demo store for showcasing an iPhone e‑commerce experience.</p>
          <p id="support" className="mt-2">Need help? Use the chat to request features and changes.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
