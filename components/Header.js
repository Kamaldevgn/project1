export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left-aligned heading */}
        <h1 className="text-xl font-bold">Kamal</h1>
        
        {/* Right-aligned links */}
        <nav>
          <a href="" className="mx-2 hover:text-gray-400">Home</a>
          <a href="/about" className="mx-2 hover:text-gray-400">About</a>
          <a href="/contact" className="mx-2 hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}