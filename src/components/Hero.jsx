import { MapPin, Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Tailoring made simple.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Book alterations, repairs, and custom fits from trusted local tailors. Easy pickup, clear pricing, and a perfect fit—every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Book a Service</a>
            <a href="#tailors" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">Find Tailors</a>
          </div>

          <div id="how" className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border p-4 bg-white">
              <div className="font-semibold text-gray-900">1. Choose service</div>
              <div className="text-sm text-gray-600">Alterations, repairs, or custom tailoring.</div>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <div className="font-semibold text-gray-900">2. Schedule pickup</div>
              <div className="text-sm text-gray-600">Courier picks up from your address.</div>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <div className="font-semibold text-gray-900">3. Tailored & delivered</div>
              <div className="text-sm text-gray-600">Track progress and get it back fast.</div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Nationwide coverage</div>
            <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> 24/7 support</div>
            <div className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> 4.9/5 average rating</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
        </div>
      </div>
    </section>
  );
}
