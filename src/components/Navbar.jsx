import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-grayish">
      <div className="text-xl font-bold text-white">NB</div>
      <div className="space-x-4 text-white">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
