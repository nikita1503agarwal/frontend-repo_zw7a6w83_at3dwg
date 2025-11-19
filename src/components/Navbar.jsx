import { useState } from 'react'

export default function Navbar({ cartCount, onViewCart }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/apple.svg" alt="Apple" className="w-6 h-6" />
          <span className="font-semibold">iStore</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#products" className="hover:text-black">iPhone</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#support" className="hover:text-black">Support</a>
        </nav>

        <button onClick={onViewCart} className="relative rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-slate-900">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
