import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#key-issues', label: 'Key Issues' },
    { href: '#mission-vision', label: 'Mission & Vision' },
    { href: '#news', label: 'News' },
    { href: '#pdf-viewer', label: 'Document View' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" className="text-2xl font-bold text-blue-900">
            Srikanth Rathnam
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-blue-900' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

