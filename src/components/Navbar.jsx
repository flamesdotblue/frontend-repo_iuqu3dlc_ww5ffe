import { useState } from 'react';
import { Needle, User, Mail, Lock } from 'lucide-react';

export default function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [role, setRole] = useState('customer'); // 'customer' | 'tailor'

  const close = () => setShowAuth(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.role = role;
    alert(`${mode === 'login' ? 'Logged in' : 'Signed up'} as ${payload.email} (${role})`);
    close();
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <Needle className="h-6 w-6 text-indigo-600" />
          <span>PocketTailor</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#how" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#tailors" className="text-gray-600 hover:text-gray-900">Find Tailors</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => { setMode('login'); setShowAuth(true); }} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Log in</button>
          <button onClick={() => { setMode('signup'); setShowAuth(true); }} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">Sign up</button>
        </div>
      </div>

      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl bg-white shadow-xl overflow-hidden">
            <div className="flex">
              <button className={`flex-1 py-3 text-sm font-semibold ${mode === 'login' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`} onClick={() => setMode('login')}>Log in</button>
              <button className={`flex-1 py-3 text-sm font-semibold ${mode === 'signup' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`} onClick={() => setMode('signup')}>Sign up</button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <div className="mt-1 relative">
                    <input name="name" required className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-10" placeholder="Jane Doe" />
                    <User className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 relative">
                  <input type="email" name="email" required className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-10" placeholder="you@example.com" />
                  <Mail className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative">
                  <input type="password" name="password" required className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pl-10" placeholder="••••••••" />
                  <Lock className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">I am a</label>
                <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1">
                  <button type="button" className={`px-3 py-1 text-sm rounded ${role === 'customer' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`} onClick={() => setRole('customer')}>Customer</button>
                  <button type="button" className={`px-3 py-1 text-sm rounded ${role === 'tailor' ? 'bg-white shadow text-gray-900' : 'text-gray-600'}`} onClick={() => setRole('tailor')}>Tailor</button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={close} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">{mode === 'login' ? 'Log in' : 'Create account'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
