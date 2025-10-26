import { useState } from 'react';
import { Scissors, Wrench, Ruler } from 'lucide-react';

const services = [
  {
    key: 'Alterations',
    icon: Scissors,
    description: 'Hems, tapering, resizing, and more for a perfect fit.'
  },
  {
    key: 'Repairs',
    icon: Wrench,
    description: 'Fix zippers, buttons, tears, and restore your favorites.'
  },
  {
    key: 'Custom Tailoring',
    icon: Ruler,
    description: 'Bespoke garments made to your measurements and style.'
  }
];

export default function Services() {
  const [open, setOpen] = useState(false);
  const [serviceType, setServiceType] = useState('Alterations');

  const onBook = (type) => {
    setServiceType(type);
    setOpen(true);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.serviceType = serviceType;
    alert(`Booking submitted:\n` + JSON.stringify(payload, null, 2));
    setOpen(false);
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Choose the service you need and book in seconds.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.key} className="rounded-xl border p-6 hover:shadow-md transition bg-white">
              <div className="flex items-start gap-4">
                <s.icon className="h-10 w-10 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.key}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.description}</p>
                </div>
              </div>
              <button onClick={() => onBook(s.key)} className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Book Service</div>
                <div className="text-lg font-semibold text-gray-900">{serviceType}</div>
              </div>
              <button className="text-gray-500 hover:text-gray-900" onClick={() => setOpen(false)}>Close</button>
            </div>
            <form onSubmit={submitBooking} className="p-6 grid lg:grid-cols-2 gap-4">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Garment type</label>
                <input name="garment" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Shirt, Pants, Blazer..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pickup date</label>
                <input type="date" name="pickupDate" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pickup time</label>
                <input type="time" name="pickupTime" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input name="address" required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="123 Main St, City" />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Measurements / Notes</label>
                <textarea name="notes" rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Include measurements (e.g., chest, waist, inseam) or special instructions" />
              </div>

              <div className="lg:col-span-2 flex items-center justify-end gap-3">
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
                <button type="submit" className="px-5 py-2 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
