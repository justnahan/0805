'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--warm-white)]/95 backdrop-blur-sm border-b border-[var(--light-pink-brown)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium-custom text-[var(--deep-brown-gray)] tracking-wide-custom">
            氛圍
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
            >
              首頁
            </Link>
            <Link 
              href="#selection" 
              className="text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
            >
              選物
            </Link>
            <Link 
              href="#atmosphere" 
              className="text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
            >
              氛圍
            </Link>
            <Link 
              href="#about" 
              className="text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
            >
              關於我們
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300"
              aria-label="開啟選單"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--light-pink-brown)]/20 bg-[var(--warm-white)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                首頁
              </Link>
              <Link 
                href="#selection" 
                className="block px-3 py-2 text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                選物
              </Link>
              <Link 
                href="#atmosphere" 
                className="block px-3 py-2 text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                氛圍
              </Link>
              <Link 
                href="#about" 
                className="block px-3 py-2 text-[var(--deep-brown-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                關於我們
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}