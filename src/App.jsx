import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedTailors from './components/FeaturedTailors';
import { Mail, Phone } from 'lucide-react';

function App() {
  const handleContact = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    alert('Message sent!\n' + JSON.stringify(payload, null, 2));
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedTailors />

        <section id="contact" className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="mt-3 text-gray-600">Have a question about a service or an order? Send us a message and our team will get back to you shortly.</p>
              <div className="mt-6 space-y-3 text-gray-700">
                <div className="inline-flex items-center gap-2"><Mail className="h-5 w-5 text-indigo-600" /> support@pockettailor.app</div>
                <div className="inline-flex items-center gap-2"><Phone className="h-5 w-5 text-indigo-600" /> +1 (555) 123-4567</div>
              </div>
            </div>
            <form onSubmit={handleContact} className="bg-indigo-50/50 rounded-xl p-6 border space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="How can we help?" />
              </div>
              <div className="flex items-center justify-end">
                <button type="submit" className="px-5 py-2 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PocketTailor. All rights reserved.</p>
          <div className="text-sm text-gray-600">Made with care for your perfect fit.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
