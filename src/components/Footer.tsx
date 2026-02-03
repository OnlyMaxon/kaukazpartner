export default function Footer() {
  return (
    <footer className="bg-kaukaz-black border-t border-kaukaz-accent/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-kaukaz-accent mb-2">Kaukaz Partner</h3>
          <p className="text-kaukaz-milk/80 mb-4">
            Your trusted partner for stable income in Warsaw, Poland
          </p>
          <p className="text-kaukaz-milk/60 text-sm">
            © {new Date().getFullYear()} Kaukaz Partner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
