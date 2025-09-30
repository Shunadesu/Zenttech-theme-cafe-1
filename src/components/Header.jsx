import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Trang chủ', href: '/', type: 'link' },
    { name: 'Thực đơn', href: '/taste', type: 'link' },
    { name: 'Giới thiệu', href: '/story', type: 'link' },
    { name: 'Đến thăm quán', href: '/visit', type: 'link' },
    { name: 'Liên hệ', href: '#contact', type: 'scroll' }
  ]

  const handleMenuClick = (item) => {
    if (item.type === 'scroll') {
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/95 backdrop-blur-sm shadow-vintage px-4">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 bg-vintage-green rounded-full flex items-center justify-center">
              <span className="text-warm-beige font-vintage font-bold text-xl">Z</span>
            </div> */}
            <h1 className="font-vintage text-2xl md:text-3xl font-bold text-vintage-green">
              Zenttech Coffee
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 relative group ${
                    location.pathname === item.href 
                      ? 'text-vintage-green/80' 
                      : 'text-vintage-green hover:text-vintage-green/70'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-vintage-green transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className="font-medium text-vintage-green hover:text-vintage-green/70 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vintage-green transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-vintage-green hover:text-vintage-green/70 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-light-brown">
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left font-medium transition-colors duration-300 py-2 ${
                      location.pathname === item.href 
                        ? 'text-vintage-green/80' 
                        : 'text-vintage-green hover:text-vintage-green/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item)}
                    className="block w-full text-left font-medium text-vintage-green hover:text-vintage-green/70 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
