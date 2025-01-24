import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">HP Kirchberg</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#news" className="nav-link">News</a>
            <a href="#teams" className="nav-link">Teams</a>
            <a href="#training" className="nav-link">Training</a>
            <a href="#contact" className="nav-link">Kontakt</a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="#news"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                News
              </a>
              <a
                href="#teams"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Teams
              </a>
              <a
                href="#training"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Training
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;