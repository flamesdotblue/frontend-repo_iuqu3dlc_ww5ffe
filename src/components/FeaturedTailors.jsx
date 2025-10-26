import { Star, MapPin } from 'lucide-react';

const tailors = [
  {
    id: 1,
    name: 'Stitch & Style Atelier',
    rating: 4.9,
    reviews: 312,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'SeamCraft Tailoring',
    rating: 4.8,
    reviews: 204,
    location: 'Uptown',
    image: 'https://images.unsplash.com/photo-1663422468467-008e33779a13?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWFtQ3JhZnQlMjBUYWlsb3Jpbmd8ZW58MHwwfHx8MTc2MTQ5NTIwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'The Bespoke Room',
    rating: 5.0,
    reviews: 158,
    location: 'Old Town',
    image: 'https://images.unsplash.com/photo-1699084260081-354ce46d738b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBCZXNwb2tlJTIwUm9vbXxlbnwwfDB8fHwxNzYxNDk1MjA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

export default function FeaturedTailors() {
  return (
    <section id="tailors" className="py-16 bg-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Featured Tailors</h2>
          <p className="mt-3 text-gray-600">Top-rated professionals near you.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tailors.map((t) => (
            <div key={t.id} className="rounded-xl overflow-hidden bg-white border hover:shadow-md transition">
              <div className="aspect-video bg-gray-100" style={{ backgroundImage: `url(${t.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <div className="mt-1 text-sm text-gray-600 inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {t.location}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-sm font-medium">
                    <Star className="h-4 w-4 text-yellow-500" /> {t.rating}
                    <span className="text-gray-500">({t.reviews})</span>
                  </div>
                </div>
                <button className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-sm font-semibold">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
