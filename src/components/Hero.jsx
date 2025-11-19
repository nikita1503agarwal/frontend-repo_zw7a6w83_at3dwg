export default function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-b from-slate-900 via-slate-900 to-white text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            iPhone Store
          </h1>
          <p className="text-slate-200 text-lg mb-8">
            Explore the latest iPhone lineup. Powerful chips, stunning cameras, and beautiful finishes.
          </p>
          <a href="#products" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-slate-100">
            Shop iPhone
          </a>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmV8ZW58MHwwfHx8MTc2MzUyNTc1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="iPhone" className="rounded-xl shadow-2xl border border-white/10" />
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-xl p-4 text-sm">
            A17 Pro • USB‑C • Titanium
          </div>
        </div>
      </div>
    </section>
  )
}
