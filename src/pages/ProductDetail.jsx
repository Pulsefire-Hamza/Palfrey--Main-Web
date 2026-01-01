"use client"
import { useState, useRef, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useCart } from "../pages/CartContext"
import { FaWhatsapp } from "react-icons/fa"

const products = [
  {
    id: 1,
    name: "Chaandni Raat",
    category: "Shop",
    price: 35000,
    priceWithBlouse: 40000,
    internationalPrice: "300£",
    description: `A silk organza saree embellished with golden moons and stars. Each moon and star is finely detailed, as though plucked from a night sky and set upon the pallu. The gold embroidery stands out beautifully against the white soft, sheer fabric. The blouse is adorned with the same moons made of dabka work, giving off a traditional vibe.<br/><br/><strong>Fabric:</strong> Saree: Silk Organza | Blouse: Masuri/Cotton Silk<br/><strong>Delivery Time:</strong> 3 weeks`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34%202.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-58-34%203.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-13-54-43.jpg",
    ],
    videos: ["https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/f87e0a8c-c13f-4c5a-9dec-5f57c2ab8746.mov"],
    madeToOrder: true,
  },
  {
    id: 2,
    name: "Chhap Tilak",
    category: "Shop",
    price: 25000,
    internationalPrice: "250£",
    description: `In a world that keeps changing around her, this piece holds a quiet imprint of where she comes from, woven gently into every thread.<br/><br/><strong>Fabric:</strong> Off white weaved cotton saree with a natural, handwoven texture giving it an elegant yet earthy feel.<br/><br/><strong>Detailing:</strong> The saree features screen printed border, inspired by Mughal art in tones of black with shocking pink finishing trim and golden zari work on the pallu. The intricate pattern adds depth and a handcrafted charm.<br/><br/><strong>Blouse:</strong> A cotton silk bustier blouse adds a striking contrast to the neutral saree, lending a bold, contemporary edge to the traditional ensemble. The deep neckline and fitted cut enhance the modern aesthetic. The look is artsy and empowered — perfect for someone who appreciates traditional craftsmanship but expresses it through a modern, minimalist lens<br/><br/><strong>Delivery Time:</strong> 3 weeks`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM.jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(8).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(7).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(6).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(5).jpeg",
    ],
    madeToOrder: true,
  },
  {
    id: 3,
    name: "Begum E Bahar",
    category: "Shop",
    price: 30000,
    internationalPrice: "300£",
    description: `BEGUM E BAHAR is the unbroken thread of identity, a bond stitched through generations of women who wore their culture not just as clothing, but as pride.<br/><br/>A structured strapless velvet corset paired with a draped metallic skirt, creating a strong contrast between sculpted and fluid forms.<br/><br/><strong>Blouse/Corset:</strong> The corset is the statement piece. It highlights a woman from another time, adorned in traditional jewellery, her head covered in grace at the center, adding a touch of heritage artistry to a modern cut.<br/><br/><strong>Skirt:</strong> High-waisted, metallic olive skirt has a sarong-like drape, featuring soft pleats gathered at the front. Its lustrous sheen adds drama while maintaining a refined elegance. The piece embodies modern Mughal revivalism — blending regal artistry, minimal structure, and metallic textures to create a museum-meets-runway statement look.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(2).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(3).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(1).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/bbe%20(4).jpeg",
    ],
    madeToOrder: true,
  },
  {
    id: 4,
    name: "Rangrez",
    category: "Shop",
    price: 20000,
    internationalPrice: "280£",
    description: `This outfit is a vibrant, easy-breezy fusion look that combines South Asian craft with contemporary street-style sensibility.<br/><br/><strong>Top:</strong> A sleeveless asymmetrical tunic featuring traditional handcrafted bandhani (tie-dye) print in a vivid magenta and lime yellow gradient. The color transition is eye-catching yet organic, creating a summery, artisanal charm.<br/><br/><strong>Fabric:</strong> Cotton-silk blend, offering both breathability and a soft drape — ideal for warmer weather. The tunic includes side tie-up detailing that adds a playful, relaxed silhouette and allows for adjustable fitting.<br/><br/><strong>Bottoms:</strong> White silk cropped pants, which balance the boldness of the top with minimalist contrast, keeping the look fresh and versatile. The look embodies boho-urban chic — rooted in craft but styled for city life, perfect for someone who values comfort, culture, and individuality.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(3).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(2).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(4).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(1).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/140ccd66-8e3f-4c83-8b4c-0b7db9bb9c0c.JPG",
    ],
    madeToOrder: true,
  },
  {
    id: 5,
    name: "Ashiana",
    category: "Shop",
    price: 15000,
    internationalPrice: "210£",
    description: `Exquisitely crafted pure cotton silk saree with maroon and green natural dyes block printed on it, paired with a maroon pure cotton silk blouse with complementing enhancements. Delivering to your doorsteps right from a small village/town of Sindh to make you feel comfortable and joyous in your new step of life.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ash%20(1).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 6,
    name: "Khoj",
    category: "Shop",
    price: 15000,
    internationalPrice: "210£",
    description: `Beautifully crafted pure cotton silk saree with blue and white natural dyes block printed on it, paired with an off-white pure cotton silk blouse with complementing enhancements. Delivering to your doorsteps right from a small village/town of Sindh.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0287.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0285.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_0286.jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 7,
    name: "Raastay",
    category: "Shop",
    price: 15000,
    internationalPrice: "210£",
    description: `Hands on block printed cotton saree from small village/town of Sindh with complementing finishings coupled with sleeveless silk blouse for a perfect day look.<br/><br/><strong>Fabric:</strong> Saree: Kora Cotton | Blouse: Pure Cotton Silk`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(7).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(6).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/rass%20(3).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 8,
    name: "Anchal",
    category: "Shop",
    price: 25000,
    internationalPrice: "250£",
    description: `White weaved saree - lightweight and has a sheer texture, with a glossy transparency, incised with stylised بوٹi (motif) depicting the shape of دل (heart), which symbolises love. Paired with a fresh red color Indian masuri blouse. The best combination of reds and whites.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(8).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(7).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(6).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/an%20(2).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 9,
    name: "Anjaan",
    category: "Shop",
    price: 25000,
    internationalPrice: "250£",
    description: `Red organza saree, embossed with پتہ بوٹi (leaf motif) hand aari embroidery portraying life and fruitfulness (being green). Paired with Brunswick green Indian masuri blouse. A true blend of reds and greens.<br/><br/>The embroidery is practiced exclusively in a small bazaar "Resham Gali" in Hyderabad, Pakistan. We at Palfrey and Gulaabo wanted to work with these craftsmen to bring back the life that their forefathers once enjoyed.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(6).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/am%20(2).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 10,
    name: "Phool Silk",
    category: "Shop",
    price: 25000,
    priceVariant: "Pure Silk: 45000 | Soft Silk: 25000",
    internationalPrice: "310£",
    description: `Silk kurta ~ stylised embroidery on neckline and sleeves hem. Made exclusively by local craftsmen in a small bazaar "Resham Gali" in Hyderabad, Pakistan. Paired with a pure cotton silk pajama and pure chiffon dupatta with chikan lace detailing. The texture of pure fabric enhances the beauty of bareeq dhaga embroidery.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(6).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/phool%20silk%20(1).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 11,
    name: "Phool",
    category: "Shop",
    price: 12000,
    internationalPrice: "200£",
    description: `Describes phool as a saree. Pure tissue silk, custom-dyeable to match the essence of your favourite flower 🌷`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(3).JPG",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(4).JPG",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(1).JPG",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/ph%20(2).JPG",
      
    ],
    madeToOrder: true,
       videos: ["https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/55b4334661914485833714a6cc1a5b7d.mov"],
  },
  {
    id: 12,
    name: "Zaban",
    category: "Shop",
    price: 25000,
    internationalPrice: "310£",
    description: `A pure cotton silk saree with the Urdu word 'رنج' screen-printed all over in calligraphic form. The word can be changed, as this piece expresses what our tongues cannot speak.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/za%20(1).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 13,
    name: "Rang Laal",
    category: "Shop",
    price: 15000,
    priceVariant: "Soft Chiffon: 15000 | Pure Chiffon: 30000",
    internationalPrice: "200£",
    description: `Indulge in the timeless allure of Mughal opulence with our exquisite, red-hued, pure chiffon Angarkha. Embrace the passionate essence of romance as you adorn yourself in the color that has whispered tales of love throughout history. Each piece is a tribute to the grandeur of the past, reimagined for the modern romantic.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/lal%20(2).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 14,
    name: "Zard",
    category: "Shop",
    price: 10000,
    internationalPrice: "200£",
    description: `Elevate your style with our Mustard Gold Dori Embellished Pure Sari - a perfect blend of regal elegance and unmatched comfort. Experience the majestic charm of a saari that effortlessly embraces your every move, while the delicate gold dori borders add a touch of opulence. Embrace comfort without compromising on style.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zar%20(3).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 15,
    name: "Rang Safaid",
    category: "Shop",
    price: 20000,
    priceVariant: "Separate Garara: 8000 | Two Piece: 20000",
    internationalPrice: "280£",
    description: `Step into a world of timeless elegance with our Pure White Lawn Garara paired with a Long Kurti, adorned in delicate white floral embroidery. A tribute to the grace of bygone eras, this ensemble captures the essence of simplicity and refined beauty. As you embrace the charm of white on white, let the memories of our Nani's cherished portraits and soulful ghazals transport you to an era of unparalleled sophistication.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suf%20(2).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 16,
    name: "Kalidar",
    category: "Shop",
    price: 15000,
    priceVariant: "Kalidar: 15000 | Ajrak: 12000",
    internationalPrice: "210£",
    description: `Mughal-inspired 12-kalidar, beautifully crafted and paired with Hijaar pants in pure white lawn and block printed ajrak.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/kali%20(1).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 17,
    name: "Dosti",
    category: "Shop",
    price: 30000,
    internationalPrice: "300£",
    description: `Organza kameez — پتہ بوٹi embroidery on Daman and both sleeves with intricate bail embroidery on the hem, sleeve border, neckline and panels on the shirt. Made exclusively by local craftsmen in a small bazaar "Resham Gali" in Hyderabad, Pakistan. Paired with a pure cotton silk pajama and organza appliqued dupatta.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(5).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/zaba%20(2).jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 18,
    name: "Viraas",
    category: "Shop",
    price: 25000,
    internationalPrice: "310£",
    description: `VIRAAS - the legacy of roots and rhythm. An artisanal ensemble featuring a hand-embroidered halter top adorned with intricate threadwork in deep maroon and beige, paired with a flowy printed skirt that has ethnic tribal pattern of ajrak in neutral hues, moves with effortless grace. A perfect blend of earthy elegance and bohemian charm, crafted for the free-spirited muse who finds poetry in nature.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(2).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(4).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(5).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/vir%20(6).jpeg",
    ],
    madeToOrder: true,
  },
  {
    id: 19,
    name: "Sukoon",
    category: "Shop",
    price: 12000,
    internationalPrice: "200£",
    description: `A contemporary kaftan ensemble offering both comfort and sophistication. The edges are accented with black block print borders, adding structure and contrast to the drape. A pop of magenta lining peeks through from the inner layer, infusing vibrancy into the muted palette. Creates a perfect balance between bohemian refinement and understated modern grace - ideal for both travel and urban chic settings.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(10).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-03%20at%203.25.45%20AM%20(11).jpeg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/suko%20(1).JPG",
    ],
    madeToOrder: true,
  },
  {
    id: 20,
    name: "Chunri",
    category: "Shop",
    price: 12000,
    internationalPrice: "300£",
    description: `Navy blue Bandhani saree, adorned with traditional white tie-dye motifs arranged in geometric and dotted patterns. The cotton saree's soft drape and airy texture give it a graceful fall while the contrasting pink tassels on the pallu add a playful pop of color. Paired with a white sleeveless blouse the styling highlights the saree's effortless sophistication. CUSTOM DYEABLE.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(4).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(3).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(2).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/chunri%20(1).jpg",
    ],
    madeToOrder: false,
    inStock: false,
  },
  {
    id: 21,
    name: "Sardiyo Ki Dhup",
    category: "Shop",
    price: 20000,
    internationalPrice: "200£",
    description: `Pure organza kurti adorned with moti takka and shadow work embroidery paired with matching ecru coloured pants and delicate matching dupatta, creates an elegant and sophisticated ensemble for a wide range of occasions. This combination not only offers comfort but also reflects a classic style making it a staple in any wardrobe.`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1704.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1703.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1705.jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 22,
    name: "Ishq Saree",
    category: "Shop",
    price: 40000,
    internationalPrice: "350£",
    description: `<strong>Bin Kahay Collection</strong><br/>Pure cotton silk saree. The Urdu calligraphic word is added on the pallu and blouse, through pattern making, of the saree. "The word can be changed it's a custom design"`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1707.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1706.jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 23,
    name: "Ranj",
    category: "Shop",
    price: 45000,
    internationalPrice: "350£",
    description: `<strong>Bin Kahay Collection</strong><br/>This design depicts the word ranj (sadness). Off white cotton silk sharara, with pure 80 gram chamoise silk shirt and screen printed tissue silk duppatta. The shirt only shows the Alphabet noon and jeem combined through pattern, going from front neck to the back. The dupatta is fully printed with Alphabets rey noon jeem which completes the word ranj. <br/><strong>*The word can be changed it's a custom design</strong>`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1715.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1712.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1711.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1710.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1709.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/IMG_1708.jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 24,
    name: "Ishq",
    category: "Shop",
    price: 45000,
    internationalPrice: "350£",
    description: `<strong>Bin Kahay Collection</strong><br/>This design depicts the word ishq. A peach silk garara, with pure 80 gram chamoise silk shirt, along with screen printed dupatta. The word is incorporated in the shirt through pattern making and its going from front neck to the back bottom. Also the Alphabet is stitched as a side panel in the garara and the word ishq is printed on the pallu of the dupatta through screen printing. <br/><strong>*The word can be changed it a custom design</strong>`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%207(1).jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%207.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%205.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%204.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%203.jpg",
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/PHOTO-2025-09-07-15-12-57%202.jpg",
    ],
    madeToOrder: true,
  },
  {
    id: 25,
    name: "Plain White Gharara",
    category: "Shop",
    price: 8000,
    internationalPrice: "350£",
    description: `<strong>A romantic, old-world, voluminous gathered hand-crafted garara with a lot of movement and softness — the kind of piece that adds fullness to an outfit.</strong>`,
    images: [
      "https://palfreyandgulabo.sfo3.cdn.digitaloceanspaces.com/WhatsApp%20Image%202025-11-06%20at%208.04.42%20PM.jpeg",
    ],
    madeToOrder: true,
  },
]

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find((prod) => prod.id === Number.parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const relatedProductsRef = useRef(null)

  const [selectedCountry, setSelectedCountry] = useState("Pakistan")
  const [conversionRate, setConversionRate] = useState(1)
  const [currencySymbol, setCurrencySymbol] = useState("PKR")

  const rates = {
    Pakistan: { rate: 1, symbol: "PKR" },
    "United Kingdom": { rate: 0.0031, symbol: "£" },
    "United States": { rate: 0.0056, symbol: "$" },
    "United Arab Emirates": { rate: 0.02, symbol: "AED" },
    Global: { rate: 0.0056, symbol: "$" },
  }

  useEffect(() => {
    const country = localStorage.getItem("selectedCountry") || "Pakistan"
    const validRate = rates[country] || rates["Pakistan"]
    setSelectedCountry(country)
    setConversionRate(validRate.rate)
    setCurrencySymbol(validRate.symbol)
  }, [])

  const [measurements, setMeasurements] = useState({
    length: "",
    chest: "",
    waist: "",
    hip: "",
    sleeve: "",
    armhole: "",
    neckDepthFront: "",
    neckDepthBack: "",
  })

  if (!product) {
    return <p className="text-center pt-40 text-lg">Product not found</p>
  }

  const openImageModal = (index) => {
    setModalImageIndex(index)
    setIsImageModalOpen(true)
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
  }

  const getAllMediaItems = () => {
    const allMedia = []
    if (product.images) {
      product.images.forEach((img) => allMedia.push({ type: "image", src: img }))
    }
    if (product.videos) {
      product.videos.forEach((vid) => allMedia.push({ type: "video", src: vid }))
    }
    return allMedia
  }

  const allMedia = getAllMediaItems()

  const handleOrderViaWhatsApp = () => {
    if (!product.madeToOrder) {
      toast.error("This product is currently unavailable.")
      return
    }

    const message = `Hi! I'm interested in ordering:\n\n📦 ${product.name}\nQuantity: ${quantity}\nPrice: ${currencySymbol} ${(product.price * conversionRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}\n\nMeasurements:\n${measurements.length ? `Length: ${measurements.length}\n` : ""}${measurements.chest ? `Chest: ${measurements.chest}\n` : ""}${measurements.waist ? `Waist: ${measurements.waist}\n` : ""}${measurements.hip ? `Hip: ${measurements.hip}\n` : ""}${measurements.sleeve ? `Sleeve: ${measurements.sleeve}\n` : ""}${measurements.armhole ? `Armhole: ${measurements.armhole}\n` : ""}${measurements.neckDepthFront ? `Neck Depth Front: ${measurements.neckDepthFront}\n` : ""}${measurements.neckDepthBack ? `Neck Depth Back: ${measurements.neckDepthBack}\n` : ""}\n\nPlease confirm the order details.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/+923323909098?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
  }

  const handleAddToCart = () => {
    if (!product.madeToOrder) {
      toast.error("This product is currently unavailable.")
      return
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      measurements: measurements,
    })
    toast.success(`${product.name} has been added to your cart!`)
  }

  const handleMeasurementChange = (field, value) => {
    setMeasurements((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const relatedProducts = products.filter((prod) => prod.category === product.category && prod.id !== product.id)

  const scrollRelatedProducts = (direction) => {
    if (relatedProductsRef.current) {
      const scrollAmount = relatedProductsRef.current.offsetWidth / 2
      relatedProductsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto pt-28 md:pt-40 pb-20 px-4 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images and Videos */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {allMedia && allMedia.length > 0 ? (
            <>
              {/* Main Display - Images and Videos */}
              <div className="w-full mx-auto">
                <div className="relative w-full bg-gray-100 border border-gray-200 overflow-hidden rounded-lg">
                  {allMedia[modalImageIndex].type === "image" ? (
                    <img
                      src={allMedia[modalImageIndex].src || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => {
                        setModalImageIndex(modalImageIndex)
                        setIsImageModalOpen(true)
                      }}
                    />
                  ) : (
                    <video
                      src={allMedia[modalImageIndex].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-contain rounded-md"
                    />
                  )}
                </div>
              </div>

              {/* Thumbnails for Images and Videos */}
              <div className="flex gap-4 mt-4 overflow-x-auto pb-2 justify-center">
                {allMedia.map((media, index) => (
                  <div
                    key={index}
                    className={`w-24 h-24 bg-gray-100 border-2 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer relative ${
                      modalImageIndex === index ? "border-black" : "border-gray-200"
                    }`}
                    onClick={() => setModalImageIndex(index)}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.src || "/placeholder.svg"}
                        alt={`${product.name} Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-gray-200">
                        <video
                          src={media.src}
                          autoPlay={false}
                          muted
                          playsInline
                          poster="https://via.placeholder.com/96?text=Video"
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-black text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="w-full mx-auto">
              <div className="relative w-full aspect-square bg-gray-100 border border-gray-200 overflow-hidden rounded-lg flex items-center justify-center">
                <p className="text-gray-500">No images or videos available</p>
              </div>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 bg-white p-0">
          <h1
            className="mb-2"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: 400,
              letterSpacing: "1.2px",
              color: "black",
            }}
          >
            {product.name}
          </h1>

          <p
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {currencySymbol} {(product.price * conversionRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>

          {product.priceVariant && (
            <p className="text-sm text-gray-600 mb-4">
              <strong>Variants:</strong> {product.priceVariant}
            </p>
          )}

          {product.priceWithBlouse && (
            <p className="text-sm text-gray-600 mb-4">
              <strong>With Blouse:</strong> PKR {product.priceWithBlouse.toLocaleString()}
            </p>
          )}

          <span className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg mb-6 tracking-wide shadow-sm bg-[#2A6D6A] text-white border border-[#2A6D6A]">
            ✓ Made to Order
          </span>

          {/* Quantity Selector */}
          <div className="flex items-center mt-8 gap-4">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity:</p>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md p-1">
              <button
                className="w-8 h-8 text-base font-semibold text-white bg-[#2A6D6A] border-0 rounded flex items-center justify-center hover:bg-[#1f4d4a] transition-all duration-200"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                −
              </button>
              <div className="w-10 h-8 flex items-center justify-center text-gray-700 font-semibold text-sm">
                {quantity}
              </div>
              <button
                className="w-8 h-8 text-base font-semibold text-white bg-[#2A6D6A] border-0 rounded flex items-center justify-center hover:bg-[#1f4d4a] transition-all duration-200"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Measurements</h3>
            <p className="text-sm text-gray-600 mb-4">Provide your measurements for a perfect fit (optional)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Length (لمبائی):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 45 inches"
                  value={measurements.length}
                  onChange={(e) => handleMeasurementChange("length", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Chest (چھاتی):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 38 inches"
                  value={measurements.chest}
                  onChange={(e) => handleMeasurementChange("chest", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Waist (کمر):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 32 inches"
                  value={measurements.waist}
                  onChange={(e) => handleMeasurementChange("waist", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Hip (ہپ):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 40 inches"
                  value={measurements.hip}
                  onChange={(e) => handleMeasurementChange("hip", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Sleeve (بازو):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 22 inches"
                  value={measurements.sleeve}
                  onChange={(e) => handleMeasurementChange("sleeve", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Armhole (بغل):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 8 inches"
                  value={measurements.armhole}
                  onChange={(e) => handleMeasurementChange("armhole", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Neck Depth Front (گلے کی گہرائی سامنے):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 7 inches"
                  value={measurements.neckDepthFront}
                  onChange={(e) => handleMeasurementChange("neckDepthFront", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Neck Depth Back (گلے کی گہرائی پیچھے):
                </label>
                <input
                  type="text"
                  placeholder="e.g., 6 inches"
                  value={measurements.neckDepthBack}
                  onChange={(e) => handleMeasurementChange("neckDepthBack", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2A6D6A] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleOrderViaWhatsApp}
              disabled={!product.madeToOrder}
              className={`w-full py-4 text-base font-bold rounded transition-all duration-300 flex items-center justify-center gap-3 shadow-md
                ${
                  product.madeToOrder
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gray-300 cursor-not-allowed text-gray-600"
                }`}
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Order by WhatsApp
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
            <p
              className="text-sm text-gray-700 leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
              dangerouslySetInnerHTML={{
                __html: product.description.replace(/<strong>/g, '<strong class="font-semibold text-gray-900">'),
              }}
            />
          </div>
        </div>
      </div>

      {/* Image and Video Modal Section */}
      {isImageModalOpen && allMedia && allMedia.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all"
          onClick={closeImageModal}
        >
          <div
            className="relative bg-transparent rounded-lg p-0 w-full max-w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Back Button */}
            <button
              onClick={() => setModalImageIndex((prevIndex) => (prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1))}
              className="absolute left-2 md:left-8 text-white bg-gray-800 hover:bg-gray-900 transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Previous Media"
            >
              <span className="text-xl md:text-2xl">&#8592;</span>
            </button>

            {allMedia[modalImageIndex].type === "image" ? (
              <img
                src={allMedia[modalImageIndex].src || "/placeholder.svg"}
                alt="Product"
                className="w-full h-auto object-contain max-h-[90vh] rounded-lg mx-8 md:mx-12"
              />
            ) : (
              <video
                src={allMedia[modalImageIndex].src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full max-w-4xl max-h-[90vh] rounded-lg mx-8 md:mx-12"
                crossOrigin="anonymous"
                style={{ minHeight: "400px" }}
              />
            )}

            {/* Next Button */}
            <button
              onClick={() => setModalImageIndex((prevIndex) => (prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1))}
              className="absolute right-2 md:right-8 text-white bg-gray-800 hover:bg-gray-900 transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Next Media"
            >
              <span className="text-xl md:text-2xl">&#8594;</span>
            </button>

            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold bg-gray-800 hover:bg-gray-900 transition duration-300 rounded p-1.5 md:p-2 shadow-md"
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 w-full py-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2
                className="text-3xl font-bold text-gray-900 text-center tracking-tight"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                You Might Also Like
              </h2>
              <div className="w-16 h-1 bg-[#2A6D6A] mx-auto mt-3"></div>
            </div>
            <div className="relative">
              {/* Left Pagination Button */}
              <button
                onClick={() => scrollRelatedProducts("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-[#2A6D6A] hover:text-white hover:bg-[#2A6D6A] transition-all duration-200 hidden md:flex items-center justify-center z-20"
                aria-label="Previous related product"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div ref={relatedProductsRef} className="flex overflow-x-auto gap-6 py-4 scrollbar-hide px-4">
                {relatedProducts.map((prod) => (
                  <Link
                    to={`/product/${prod.id}`}
                    key={prod.id}
                    className="w-[200px] sm:w-[240px] flex-shrink-0 group block"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <div className="bg-white border border-gray-200 overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50">
                        {prod.images && prod.images.length > 0 ? (
                          <>
                            <img
                              src={prod.images[0] || "/placeholder.svg"}
                              alt={prod.name}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {prod.images[1] && (
                              <img
                                src={prod.images[1] || "/placeholder.svg"}
                                alt={prod.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              />
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">{prod.name}</h3>
                        <p className="text-base font-bold text-[#2A6D6A]">
                          {currencySymbol}{" "}
                          {(prod.price * conversionRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Pagination Button */}
              <button
                onClick={() => scrollRelatedProducts("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 text-[#2A6D6A] hover:text-white hover:bg-[#2A6D6A] transition-all duration-200 hidden md:flex items-center justify-center z-20"
                aria-label="Next related product"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default ProductDetail
