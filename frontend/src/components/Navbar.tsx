import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const linkClasses = (path: string) =>
    location.pathname === path ? "text-blue-500 font-semibold" : "hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <h1 className="text-xl font-bold text-blue-600">SRD Education Center</h1>
        <div className="space-x-6">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/courses" className={linkClasses("/courses")}>Courses</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/gallery" className={linkClasses("/gallery")}>Gallery</Link>
          <Link to="/contact" className={linkClasses("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
