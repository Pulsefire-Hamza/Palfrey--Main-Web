import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const OpenBanner = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [fade, setFade] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const desktopBanner =
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-23%20at%205.40.57%20PM%20(3).jpeg"

  const mobileBanner =
    "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-12-11%20at%2010.25.42%20PM.jpeg"

  const linkUrl = "/shop"   // ✅ ab /shop open hoga

  useEffect(() => {
    const closed = sessionStorage.getItem("bannerClosed")
    if (!closed) {
      setIsOpen(true)
      setTimeout(() => setFade(true), 50)
    }

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  const handleClose = () => {
    setFade(false)
    setTimeout(() => {
      setIsOpen(false)
      sessionStorage.setItem("bannerClosed", "true")
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative mx-auto w-[95%] sm:w-[90%] md:w-auto max-w-[1200px]">
        
        {/* ✅ Link changed from <a> to <Link> */}
        <Link
          to={linkUrl}
          className="block transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={isMobile ? mobileBanner : desktopBanner}
            alt="Promo Banner"
            className={`w-full h-auto rounded-lg shadow-xl ${
              isMobile ? "max-w-[420px]" : "max-w-[1200px]"
            } mx-auto`}
          />
        </Link>

        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded-full hover:bg-opacity-70 transition text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default OpenBanner
