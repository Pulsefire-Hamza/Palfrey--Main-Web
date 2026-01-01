"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../pages/CartContext"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState(null) // Track desktop submenu
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null) // Track mobile submenu
  const searchRef = useRef(null)
  const location = useLocation()

  // ✅ Detect only actual homepage
  const isHome = location.pathname === "/" || location.pathname === "/home" || location.pathname === "/main"

  const { cartItems } = useCart()
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  // ✅ Logo sets
  const homeLogos = [
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Horse%20palfrey%201%20(1).png",
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/animated%20white%201.png",
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/animated%20green%201.png",
  ]

  const scrolledLogos = [
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/Horse%20palfrey%201%20(1).png",
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/animated%20green%201.png",
  ]

  // ✅ Active logo list changes based on page/scroll
  const activeLogos = isHome && !isScrolled ? homeLogos : scrolledLogos

  // ✅ Logo rotation interval
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % activeLogos.length)
    }, 1500)
    return () => clearInterval(logoInterval)
  }, [activeLogos])

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔹 Product list for search
  const products = [
    {
      id: 1,
      name: "Chaandni Raat",
      image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34.jpg",
    },
    {
      id: 2,
      name: "Chhap Tilak",
      image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/1abadce0-1c6d-464d-a101-f50a9859734e.JPG",
    },
    {
      id: 3,
      name: "Begum e Bahar",
      image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/a6ede087-315b-4aa5-a9e0-cd6a70b619be%202.JPG",
    },
    { id: 4, name: "Rangrez", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/reza%20(4).JPG" },
    { id: 5, name: "Ashiana", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(5).jpg" },
    { id: 6, name: "Khoj", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0287.jpg" },
    { id: 7, name: "Anchal", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(7).jpg" },
    { id: 8, name: "Anjaan", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(5).jpg" },
    { id: 9, name: "Phool", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(3).JPG" },
    { id: 10, name: "Zaban", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(4).jpg" },
    { id: 11, name: "Raat ki Rani", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rk%20(4).jpg" },
    { id: 12, name: "Zard", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(4).jpg" },
    { id: 13, name: "Raastay", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(2).jpg" },
    { id: 14, name: "Rang Laal", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(5).jpg" },
    { id: 15, name: "Rang Safaid", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(5).jpg" },
    { id: 16, name: "Kalidar", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(3).jpg" },
    { id: 17, name: "Phool Silk", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/sil%20(6).jpg" },
    { id: 18, name: "Viraas", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(2).JPG" },
    { id: 19, name: "Sukoon", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suko%20(2).JPG" },
    { id: 21, name: "Dosti", image: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(1).jpg" },
  ]

  // 🔍 Search logic
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    if (query) {
      setFilteredProducts(products.filter((p) => p.name.toLowerCase().includes(query)))
    } else setFilteredProducts([])
  }

  const handleSearchToggle = () => setShowSearch(!showSearch)
  const handleMobileMenuToggle = (isOpen) => setIsMobileMenuOpen(isOpen)

  // ✅ Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setShowSearch(false)
    }
    if (showSearch) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showSearch])

  const menuItems = [
    { name: "Our Story", href: "/our-story" },
    {
      name: "Shop",
      href: "/shop",
      subcategories: [
        //{ name: "Saree", href: "saree" },
       // { name: "Pardes Edition", href: "/pardes-edition" },
        { name: "Safar Nama", href: "/safar-nama-shop" },
        { name: "Khushbu", href: "/khushbu" },
        { name: "Formals", href: "/formals" },
        { name: "Rang", href: "/rang" },
        { name: "Basics", href: "/basics" },
        { name: "Bin Kahay", href: "/binkhay" },
      ],
    },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/contact" },
    { name: "Packaging", href: "/packaging" },
    { name: "Reviews", href: "/reviews" },
  ]

  const forceScrolled = showSearch || isScrolled
  const textColor = isHome && !forceScrolled ? "white" : "black"
  const bgColor = isHome && !forceScrolled ? "bg-transparent" : "bg-white shadow-md"

  const logoSrc = activeLogos[currentLogoIndex]

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${bgColor}`}>
      <div className="container mx-auto relative">
        {/* 🔹 Main Navbar */}
        <div className="flex items-center justify-between py-3 px-4 md:px-6">
          {/* Mobile Menu Button */}
          <button onClick={() => handleMobileMenuToggle(true)} className="p-2 md:hidden rounded">
            <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* ✅ Logo */}
          <Link to="/home" className="flex-1 text-center">
            <img
              key={logoSrc}
              src={logoSrc || "/placeholder.svg"}
              alt="Logo"
              className="h-20 mx-auto object-contain transition-all duration-700 ease-in-out opacity-90 hover:opacity-100"
            />
          </Link>

          {/* Mobile Search + Cart */}
          <div className="flex items-center space-x-3 md:hidden">
            <button onClick={handleSearchToggle} className="p-2 rounded">
              <svg className="w-5 h-5" fill="none" stroke={textColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={showSearch ? "M6 18L18 6M6 6l12 12" : "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
                />
              </svg>
            </button>

            <Link to="/cart" className="relative p-2">
              <svg className="w-5 h-5" fill="none" stroke={textColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* 🔹 Desktop Nav */}
        <div
          className={`hidden md:flex justify-between items-center px-4 md:px-6 transition-all duration-300 ${
            forceScrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
        >
          <ul className="flex space-x-8 py-3 font-medium text-sm">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subcategories && setOpenDesktopSubmenu(item.name)}
                onMouseLeave={() => setOpenDesktopSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className={`transition-colors duration-200 flex items-center gap-1 ${
                    textColor === "white" ? "text-white hover:text-gray-200" : "text-black hover:underline"
                  }`}
                >
                  {item.name}
                  {item.subcategories && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  )}
                </Link>

                {item.subcategories && openDesktopSubmenu === item.name && (
                  <div className="absolute left-0 top-full mt-0 w-52 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-200 overflow-hidden">
                    {item.name === "Shop" && (
                      <Link
                        to="/shop"
                        className="block px-6 py-3.5 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent text-sm font-semibold transition-all duration-200 border-b border-gray-100"
                        onClick={() => setOpenDesktopSubmenu(null)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                          Shop All
                        </span>
                      </Link>
                    )}
                    {item.subcategories.map((sub, index) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className={`block px-6 py-3.5 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent text-sm font-semibold transition-all duration-200 ${
                          index !== item.subcategories.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                        onClick={() => setOpenDesktopSubmenu(null)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {sub.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button onClick={handleSearchToggle} className="p-2 rounded">
              <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={showSearch ? "M6 18L18 6M6 6l12 12" : "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
                />
              </svg>
            </button>

            <Link to="/cart" className="relative p-2 rounded">
              <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1.5 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        {/* ✅ Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 md:hidden flex"
            onClick={() => handleMobileMenuToggle(false)}
          >
            <div
              className="relative w-3/4 max-w-xs h-full bg-white p-6 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0 animate-slide-in rounded-r-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
                <h2 className="text-lg font-semibold text-gray-800 tracking-wide">Menu</h2>
                <button
                  onClick={() => handleMobileMenuToggle(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.subcategories ? (
                      <div>
                        <button
                          onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)}
                          className="w-full text-left flex items-center justify-between text-gray-700 font-medium text-[15px] tracking-wide hover:text-green-700 transition-colors duration-200"
                        >
                          {item.name}
                          <svg
                            className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.name ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </button>
                        {openMobileSubmenu === item.name && (
                          <div className="mt-3 ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                            {item.name === "Shop" && (
                              <Link
                                to="/shop"
                                onClick={() => handleMobileMenuToggle(false)}
                                className="block text-gray-700 font-semibold text-sm hover:text-green-700 transition-colors duration-200 mb-2 pb-2 border-b border-gray-200"
                              >
                                Shop All
                              </Link>
                            )}
                            {item.subcategories.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => handleMobileMenuToggle(false)}
                                className="block text-gray-600 text-sm hover:text-green-700 transition-colors duration-200"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => handleMobileMenuToggle(false)}
                        className="block text-gray-700 font-medium text-[15px] tracking-wide hover:text-green-700 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-gray-200 pt-4">
                <Link
                  to="/cart"
                  onClick={() => handleMobileMenuToggle(false)}
                  className="flex items-center justify-center gap-2 py-2.5 text-white bg-[#2A6D6A] hover:bg-[#245d5b] rounded-full transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Go to Cart ({cartItemCount})</span>
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* ✅ Search Overlay */}
        {showSearch && (
          <div
            ref={searchRef}
            className="absolute top-full left-0 right-0 w-full bg-white px-4 py-3 shadow-lg border-t border-gray-200 z-50"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-300 rounded-full focus:border-black focus:outline-none"
            />

            {filteredProducts.length > 0 && (
              <div className="mt-3 bg-white border border-gray-200 rounded-lg shadow-md max-h-72 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-100 transition"
                    onClick={() => {
                      setShowSearch(false)
                      setSearchQuery("")
                    }}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm text-gray-800">{product.name}</span>
                  </Link>
                ))}
              </div>
            )}

            {searchQuery && filteredProducts.length === 0 && (
              <p className="mt-2 text-sm text-gray-500 text-center">No products found.</p>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
