export default function Footer() {
  return (
    <footer className="border-t py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} PocketTailor. All rights reserved.</p>
        <div className="text-sm text-gray-600">Secure payments • Doorstep pickup • Perfect fit guarantee</div>
      </div>
    </footer>
  );
}
