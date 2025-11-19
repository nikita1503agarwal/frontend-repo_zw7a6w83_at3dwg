const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/api/products`)
  if (!res.ok) throw new Error('Failed to load products')
  return res.json()
}

export async function createOrder(order) {
  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Failed to create order')
  }
  return res.json()
}

export async function addProduct(product) {
  const res = await fetch(`${BASE_URL}/api/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  if (!res.ok) throw new Error('Failed to add product')
  return res.json()
}

export async function seedDemoProducts() {
  const demos = [
    {
      title: 'iPhone 15 Pro',
      description: 'Titanium. A17 Pro chip. USB‑C. Best-in-class cameras.',
      price: 999,
      category: 'iPhone',
      in_stock: true,
      image: 'https://images.unsplash.com/photo-1695619575474-9b45e37bc1e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFByb3xlbnwwfDB8fHwxNzYzNTI1NzQ5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      storage: '256GB',
      color: 'Natural Titanium'
    },
    {
      title: 'iPhone 15',
      description: 'Dynamic Island. 48MP camera. USB‑C. All‑day battery life.',
      price: 799,
      category: 'iPhone',
      in_stock: true,
      image: 'https://images.unsplash.com/photo-1695048132832-b41495f12eb4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNXxlbnwwfDB8fHwxNzYzNTI1NzQ5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      storage: '128GB',
      color: 'Blue'
    },
    {
      title: 'iPhone 14',
      description: 'A great all‑rounder with excellent camera and performance.',
      price: 599,
      category: 'iPhone',
      in_stock: true,
      image: 'https://images.unsplash.com/photo-1680776785024-5223d7a75ea8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNHxlbnwwfDB8fHwxNzYzNTI1NzUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      storage: '128GB',
      color: 'Midnight'
    }
  ]

  for (const p of demos) {
    try { await addProduct(p) } catch (e) { /* ignore */ }
  }
}
