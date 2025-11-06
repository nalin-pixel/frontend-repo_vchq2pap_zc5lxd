export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">New Season</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Minimal workwear for maximum focus</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">Tailored shirts, blazers, and trousers designed to simplify your routine and elevate your presence. Clean lines, refined fabrics, and a fit that means business.</p>
            <div className="mt-8 flex gap-3">
              <a href="#collection" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/10">Explore Collection</a>
              <a href="#story" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">Our Philosophy</a>
            </div>
          </div>
          <div className="relative lg:h-[28rem] rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(17,24,39,0.06)_0%,rgba(17,24,39,0)_70%)]" />
            <div className="relative grid grid-cols-3 gap-4 h-full">
              <div className="col-span-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Shirts</h3>
                  <p className="text-xs text-gray-500">Italian cotton</p>
                </div>
                <div className="aspect-[3/4] rounded-lg bg-gray-100" />
              </div>
              <div className="col-span-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Blazers</h3>
                  <p className="text-xs text-gray-500">Modern tailored</p>
                </div>
                <div className="aspect-[3/4] rounded-lg bg-gray-100" />
              </div>
              <div className="col-span-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Trousers</h3>
                  <p className="text-xs text-gray-500">Clean drape</p>
                </div>
                <div className="aspect-[3/4] rounded-lg bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
