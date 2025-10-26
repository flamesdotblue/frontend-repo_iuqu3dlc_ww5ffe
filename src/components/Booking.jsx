import { useState } from 'react';
import { Scissors, Shirt, Calendar, Clock, MapPin, Ruler, CreditCard, Wallet, Banknote, Truck } from 'lucide-react';

const serviceTypes = [
  { value: 'Alteration', label: 'Alteration', icon: Scissors },
  { value: 'Repair', label: 'Repair', icon: WrenchIconFallback },
  { value: 'Custom Tailoring', label: 'Custom Tailoring', icon: Shirt },
];

// Some environments might not include a Wrench icon name; provide a tiny fallback
function WrenchIconFallback(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a4.5 4.5 0 0 0-6.36 6.36l7.07 7.07a1.5 1.5 0 0 0 2.12 0l1.41-1.41a1.5 1.5 0 0 0 0-2.12L14.7 6.3z" />
      <path d="M7 7l3 3" />
    </svg>
  );
}

const garmentTypes = ['Pant', 'Shirt', 'Dress', 'Skirt', 'Jacket'];

const paymentMethods = [
  { value: 'card', label: 'Credit/Debit Card', icon: CreditCard },
  { value: 'upi', label: 'UPI', icon: Wallet },
  { value: 'bank', label: 'Bank Transfer', icon: Banknote },
  { value: 'paypal', label: 'PayPal', icon: Wallet },
  { value: 'stripe', label: 'Stripe', icon: CreditCard },
  { value: 'wallet', label: 'Wallet', icon: Wallet },
  { value: 'emi', label: 'EMI', icon: Banknote },
  { value: 'cod', label: 'Cash on Delivery', icon: Truck },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('Alteration');
  const [garmentType, setGarmentType] = useState('Pant');
  const [details, setDetails] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [address, setAddress] = useState('');
  const [measurements, setMeasurements] = useState({ chest: '', waist: '', hip: '', length: '' });
  const [payment, setPayment] = useState('card');
  const [savePayment, setSavePayment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      serviceType,
      garmentType,
      details,
      pickupDate,
      pickupTime,
      address,
      measurements,
      payment,
      savePayment,
    };
    alert('Booking submitted!\n' + JSON.stringify(payload, null, 2));
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Book a Service</h2>
          <p className="mt-2 text-gray-600">Tell us what you need tailored and choose a secure payment option.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl border p-6 space-y-6">
              {/* Stepper */}
              <div className="flex items-center gap-4">
                <div className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? 'w-24 bg-indigo-600' : 'w-8 bg-indigo-200'}`}></div>
                <div className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? 'w-24 bg-indigo-600' : 'w-8 bg-indigo-200'}`}></div>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {serviceTypes.map((s) => {
                        const Icon = s.icon;
                        return (
                          <button
                            type="button"
                            key={s.value}
                            onClick={() => setServiceType(s.value)}
                            className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors ${serviceType === s.value ? 'border-indigo-600 bg-white shadow-sm' : 'border-gray-200 hover:bg-white'}`}
                          >
                            <Icon className="h-5 w-5 text-indigo-600" /> {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Garment Type</label>
                      <select value={garmentType} onChange={(e) => setGarmentType(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                        {garmentTypes.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Service Details</label>
                      <input value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Describe your needs (e.g. "shorten sleeves", "replace zipper")' className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
                      <div className="mt-1 relative">
                        <Calendar className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="pl-9 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pickup Time</label>
                      <div className="mt-1 relative">
                        <Clock className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="pl-9 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pickup Address</label>
                    <div className="mt-1 relative">
                      <MapPin className="h-4 w-4 text-gray-500 absolute left-3 top-3" />
                      <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3} placeholder="Include landmark for easier pickup" className="pl-9 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Measurements (cm)</label>
                    <div className="grid sm:grid-cols-4 gap-4">
                      <MeasurementInput label="Chest" value={measurements.chest} onChange={(v) => setMeasurements({ ...measurements, chest: v })} />
                      <MeasurementInput label="Waist" value={measurements.waist} onChange={(v) => setMeasurements({ ...measurements, waist: v })} />
                      <MeasurementInput label="Hip" value={measurements.hip} onChange={(v) => setMeasurements({ ...measurements, hip: v })} />
                      <MeasurementInput label="Length" value={measurements.length} onChange={(v) => setMeasurements({ ...measurements, length: v })} />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <button type="button" onClick={() => setStep(2)} className="px-5 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Next: Payment</button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Secure Payment</h3>
                    <p className="text-sm text-gray-600">Choose a payment method. Your information is encrypted.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {paymentMethods.map((m) => {
                      const Icon = m.icon;
                      const active = payment === m.value;
                      return (
                        <button
                          type="button"
                          key={m.value}
                          onClick={() => setPayment(m.value)}
                          className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors ${active ? 'border-indigo-600 bg-white shadow-sm' : 'border-gray-200 hover:bg-white'}`}
                        >
                          <Icon className="h-5 w-5 text-indigo-600" /> {m.label}
                        </button>
                      );
                    })}
                  </div>

                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={savePayment} onChange={(e) => setSavePayment(e.target.checked)} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-sm text-gray-700">Save payment details for next time</span>
                  </label>

                  <div className="flex items-center justify-between">
                    <button type="button" onClick={() => setStep(1)} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-white">Back</button>
                    <button type="submit" className="px-5 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Confirm & Pay</button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <aside className="bg-white border rounded-xl p-6 h-max">
            <h3 className="font-semibold mb-4">Summary</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <SummaryRow label="Service" value={serviceType} />
              <SummaryRow label="Garment" value={garmentType} />
              {details && <SummaryRow label="Details" value={details} />}
              {pickupDate && <SummaryRow label="Pickup Date" value={pickupDate} />}
              {pickupTime && <SummaryRow label="Pickup Time" value={pickupTime} />}
              {address && <SummaryRow label="Address" value={address} />}
              {(measurements.chest || measurements.waist || measurements.hip || measurements.length) && (
                <div>
                  <div className="text-gray-500">Measurements</div>
                  <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
                    {measurements.chest && <div>Chest: {measurements.chest} cm</div>}
                    {measurements.waist && <div>Waist: {measurements.waist} cm</div>}
                    {measurements.hip && <div>Hip: {measurements.hip} cm</div>}
                    {measurements.length && <div>Length: {measurements.length} cm</div>}
                  </div>
                </div>
              )}
              <SummaryRow label="Payment" value={paymentMethods.find(p => p.value === payment)?.label} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MeasurementInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative">
        <Ruler className="h-4 w-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="number"
          min="0"
          step="0.1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="cm"
          className="pl-9 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value || '-'}</div>
    </div>
  );
}
