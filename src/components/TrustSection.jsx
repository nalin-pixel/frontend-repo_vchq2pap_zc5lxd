export default function TrustSection() {
  return (
    <section id="trust" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Quality you can depend on</h2>
            <p className="mt-3 text-gray-600">We obsess over the details so you don’t have to — from fabric sourcing to final stitch. Every piece is made to earn its place in your wardrobe.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-medium text-gray-900">30-Day Wear Test</h3>
              <p className="mt-2 text-sm text-gray-600">Try it at work. If it’s not the best you’ve worn, send it back — no questions asked.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-medium text-gray-900">Free Exchanges</h3>
              <p className="mt-2 text-sm text-gray-600">Not the right fit? We’ll make it right with fast, easy exchanges.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-medium text-gray-900">Ethical Production</h3>
              <p className="mt-2 text-sm text-gray-600">Responsible manufacturers, traceable materials, audited processes.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-medium text-gray-900">Dedicated Support</h3>
              <p className="mt-2 text-sm text-gray-600">Personal assistance from sizing to care, whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
