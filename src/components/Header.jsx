import { ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center">
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Atelier Standard</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#collection" className="hover:text-gray-900 transition-colors">Collection</a>
          <a href="#story" className="hover:text-gray-900 transition-colors">Our Story</a>
          <a href="#trust" className="hover:text-gray-900 transition-colors">Guarantee</a>
        </nav>
        <button className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
          Shop Now
        </button>
      </div>
    </header>
  )
}
