import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
