"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"

import "swiper/css"
import "swiper/css/pagination"

const Banner = () => {
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (isMobile === null) return null

  // ✅ Desktop images
  const desktopSlides = [
    {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/banner.jpeg",
      link: "/shop",
    },
     {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/slidershow%20img%20(3).jpeg",
      link: "/shop",
    },
       {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/slidershow%20img%20(2).jpeg",
      link: "/shop",
    },
       {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/slidershow%20img%20(1).jpeg",
      link: "/shop",
    },
       {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/slidershow%20img%20(4).jpeg",
      link: "/shop",
    },
  ]

  // ✅ Mobile videos
  const mobileSlides = [
    {
      src: "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Video%202025-11-06%20at%2010.02.49%20PM.mp4",
      link: "/shop",
    },
  ]

  const slidesToShow = isMobile ? mobileSlides : desktopSlides

  return (
    <div className="w-full -mt-1 md:-mt-1   relative z-10 overflow-hidden bg-black">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {slidesToShow.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link}>
              <div className="relative w-full flex justify-center">
                {isMobile ? (
                  <video
                    src={slide.src}
                    className="w-full h-auto object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                 <img
  src={slide.src}
  alt={`Slide ${index + 1}`}
  className="w-full h-[950px] object-cover md:-mt-4"
/>

                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
