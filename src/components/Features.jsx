const features = [
  {
    title: 'Precision Tailoring',
    description:
      'Every seam is engineered for comfort and longevity with clean, minimal finishing throughout.',
  },
  {
    title: 'Responsible Materials',
    description:
      'Premium fabrics chosen for durability and feel — built to look sharp, wear after wear.',
  },
  {
    title: 'Effortless Care',
    description:
      'Wrinkle-resistant pieces that move with you and simplify your weekly routine.',
  },
  {
    title: 'Timeless Palette',
    description:
      'Neutral tones and refined silhouettes designed to integrate seamlessly with your wardrobe.',
  },
]

export default function Features() {
  return (
    <section id="collection" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Built for the modern workday</h2>
          <p className="mt-3 text-gray-600">
            A focused collection of shirts, blazers, and trousers — essentials that elevate the everyday.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-sm font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
