'use client'
import React, { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

export default function ResponsiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/blog/shadow-fight-2-tips", label: "Shadow Fight 2 Tips" },
    { href: "/blog/shadow-fight-2-guide", label: "Guide" },
    { href: "#gameplay", label: "Gameplay" },
    { href: "#installation", label: "Installation" },
    { href: "#download", label: "Download" },
    { href: "#features", label: "Features" }
  ];

  return (
    <header className="bg-black/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-orange-500" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Shadow Fight 2 Mod APK
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-orange-400 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="bg-gray-900/90 rounded-lg border border-gray-700 backdrop-blur-sm">
            <div className="px-4 py-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-3 px-2 text-white hover:text-orange-400 hover:bg-gray-800/50 rounded-md transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Tablet Navigation (hidden on mobile and desktop) */}
        <div className="hidden md:block lg:hidden mt-4">
          <nav className="flex flex-wrap gap-2 justify-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm text-white hover:text-orange-400 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}