"use client"

import { useState } from "react"
import { useCart } from "../pages/CartContext"
import emailjs from "emailjs-com"
import { toast, ToastContainer } from "react-toastify"
import ReactConfetti from "react-confetti"
import "react-toastify/dist/ReactToastify.css"

export default function CheckoutPage() {
  const { cartItems, calculateTotal } = useCart()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [apartment, setApartment] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("Pakistan")
  const [emailOffers, setEmailOffers] = useState(false)
  const [saveInfo, setSaveInfo] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  const [customerDetails, setCustomerDetails] = useState({})
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [screenshotSent, setScreenshotSent] = useState(false)

  const DELIVERY_CHARGE = 170
  const subtotal = Number(calculateTotal())
  const deliveryCharge = DELIVERY_CHARGE
  const totalWithDelivery = subtotal + deliveryCharge

  const SERVICE_ID = "service_zresjwgwew"
  const TEMPLATE_ID = "template_yy5c9aawee"
  const USER_ID = "z1vb-H6GRp3n3hOBSwe"

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 9000) + 1000
  }

  const sendOrderEmail = (generatedOrderNumber) => {
    const orderDetails = cartItems
      .map((item, index) => {
        const sizeInfo = item.size ? ` (Size: ${item.size})` : ""
        const colorInfo = item.colorName ? ` (Color: ${item.colorName})` : ""
        return `${index + 1}. ${item.name}${sizeInfo}${colorInfo} - Rs ${item.price} x ${item.quantity} = Rs ${(item.price * item.quantity).toLocaleString()}\n   Image: ${item.image || "/placeholder.svg"}`
      })
      .join("\n")

    const productImages = cartItems.map((item) => item.image || "/placeholder.svg").join(", ")

    const paymentInfo =
      paymentMethod === "cod"
        ? `\n\n💳 Payment Method: Cash on Delivery (COD)`
        : `\n\n💳 Payment Method: Online Payment (EasyPaisa)\n   Screenshot Sent: ${screenshotSent ? "Yes" : "No"}`

    const message = `🛒 *New Order Received!*\n\n📋 *Order Number:* #${generatedOrderNumber}\n\n👤 *Customer Info:*\n- Name: ${firstName} ${lastName}\n- Email: ${email}\n- Phone: ${phone}\n- Address: ${address}, ${apartment}, ${city}, ${postalCode}, ${country}\n\n📦 *Order Summary:*\n${orderDetails}\n🚚 Delivery Charges: Rs ${deliveryCharge}\n💰 Grand Total: Rs ${totalWithDelivery}${paymentInfo}`

    const emailParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: "Palfrey&گُلابو",
      message,
      reply_to: email,
      order_number: generatedOrderNumber,
      product_images: productImages,
      customer_name: `${firstName} ${lastName}`,
      customer_email: email,
      customer_phone: phone,
      customer_address: `${address}, ${apartment}, ${city}, ${postalCode}, ${country}`,
      order_total: totalWithDelivery,
      payment_method: paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment",
      delivery_charge: deliveryCharge,
      subtotal: subtotal,
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
      .then((response) => {
        console.log("Email sent successfully", response)
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  const handleCheckout = () => {
    if (!firstName || !lastName || !email || !address || !city || !phone) {
      toast.error("Please fill in all required fields.", { position: "top-right", autoClose: 3000 })
      return
    }

    if (paymentMethod === "online" && !screenshotSent) {
      toast.error("Please confirm you have sent the payment screenshot.", { position: "top-right", autoClose: 3000 })
      return
    }

    setIsLoading(true)
    setIsOrderComplete(false)

    const generatedOrderNumber = generateOrderNumber()
    setOrderNumber(generatedOrderNumber)
    setCustomerDetails({
      firstName,
      lastName,
      email,
      phone,
      address,
      apartment,
      city,
      postalCode,
      country,
      paymentMethod,
    })

    sendOrderEmail(generatedOrderNumber)

    setTimeout(() => {
      setIsLoading(false)
      setOrderPlaced(true)
      setTimeout(() => {
        setOrderPlaced(false)
      }, 20000)

      setFirstName("")
      setLastName("")
      setEmail("")
      setAddress("")
      setApartment("")
      setCity("")
      setPostalCode("")
      setPhone("")
      setScreenshotSent(false)
      setIsOrderComplete(true)
    }, 2500)
  }

  const handleContinueShopping = () => {
    window.location.href = "/"
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some items to your cart to continue</p>
          <button
            onClick={handleContinueShopping}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Continue shopping
          </button>
        </div>
      </div>
    )
  }

  const isFormValid = firstName && lastName && email && address && city && phone
  const isCheckoutButtonDisabled = !isFormValid || isLoading || (paymentMethod === "online" && !screenshotSent)

  if (isOrderComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Thank you for your order!</h1>
            <p className="text-muted-foreground">Your order has been placed successfully.</p>
            <div className="bg-muted rounded-md p-4 mt-4 inline-block">
              <p className="text-sm font-medium">Order #{orderNumber}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium text-foreground mb-4">Customer details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">First Name</p>
                  <p className="font-medium">{customerDetails.firstName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Name</p>
                  <p className="font-medium">{customerDetails.lastName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{customerDetails.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">{customerDetails.phone}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-muted-foreground">Address</p>
                  <p className="font-medium">
                    {customerDetails.address}, {customerDetails.apartment}, {customerDetails.city},{" "}
                    {customerDetails.postalCode}, {customerDetails.country}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Payment</p>
                  <p className="font-medium">
                    {customerDetails.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium text-foreground mb-4">Order summary</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                      {item.colorName && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-muted-foreground">Color:</span>
                          <div
                            className="w-3 h-3 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.colorHex || "#6B7280" }}
                          />
                          <span className="text-xs text-muted-foreground">{item.colorName}</span>
                        </div>
                      )}
                      {item.measurements && Object.values(item.measurements).some((v) => v) && (
                        <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
                          <p className="font-medium">Measurements:</p>
                          {item.measurements.length && <p>Length: {item.measurements.length}</p>}
                          {item.measurements.chest && <p>Chest: {item.measurements.chest}</p>}
                          {item.measurements.waist && <p>Waist: {item.measurements.waist}</p>}
                          {item.measurements.hip && <p>Hip: {item.measurements.hip}</p>}
                          {item.measurements.sleeve && <p>Sleeve: {item.measurements.sleeve}</p>}
                          {item.measurements.armhole && <p>Armhole: {item.measurements.armhole}</p>}
                          {item.measurements.neckDepthFront && <p>Neck Front: {item.measurements.neckDepthFront}</p>}
                          {item.measurements.neckDepthBack && <p>Neck Back: {item.measurements.neckDepthBack}</p>}
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Qty {item.quantity} × Rs {item.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="font-medium text-sm">Rs {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>Rs {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span>Rs {deliveryCharge.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>Rs {totalWithDelivery.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleContinueShopping}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
        {orderPlaced && <ReactConfetti />}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 sm:pt-20 md:pt-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Column - Checkout Form */}
          <div className="bg-white px-6 py-8 lg:px-16 lg:py-12">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-6"></div>
              </div>

              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Checkout Page</h2>
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                    placeholder="Email"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="email-offers"
                    checked={emailOffers}
                    onChange={(e) => setEmailOffers(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                  />
                  <label htmlFor="email-offers" className="ml-3 text-sm text-gray-700 font-medium">
                    Email me with news and offers
                  </label>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base bg-white"
                    >
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                      placeholder="Last name"
                    />
                  </div>

                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                    placeholder="Address"
                  />

                  <input
                    type="text"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                    placeholder="Apartment, suite, etc. (optional)"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                      placeholder="Postal code (optional)"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base pr-12"
                      placeholder="Phone"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="save-info"
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                    />
                    <label htmlFor="save-info" className="ml-3 text-sm text-gray-700 font-medium">
                      Save this information for next time
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping method</h2>
                <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Delivery Charges</span>
                    <span className="font-semibold text-gray-900 text-lg">{`Rs ${deliveryCharge.toLocaleString()}`}</span>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Payment</h2>
                <p className="text-sm text-gray-600 mb-6 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  All transactions are secure and encrypted.
                </p>

                <div className="space-y-4">
                  <div
                    className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                      paymentMethod === "cod"
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cod"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="cod" className="ml-4 font-semibold text-gray-900 cursor-pointer text-base">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  <div
                    className={`border-2 rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                      paymentMethod === "online"
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("online")}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="online" className="ml-4 font-semibold text-gray-900 cursor-pointer text-base">
                        Online Payment
                      </label>
                    </div>
                  </div>
                </div>

                {paymentMethod === "online" && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Bank & Wallet Payment Details</h4>

                    <div className="text-sm space-y-2 mb-5 bg-white p-4 rounded-lg border">
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Bank Afalah :</span>
                        <span className="font-mono text-gray-900">IBAN: PK09ALFH0418001008859282</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium text-gray-700">Account Name:</span>
                        <span className="text-gray-900">SOORAT FATIMA </span>
                      </p>
                    
                    </div>

                    <a
                      href="https://wa.me/+923323909098"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.44 0 .05 5.39.05 12a11.9 11.9 0 001.62 6l-.37-.22-3.72.97.99-3.61-.24-.37A9.9 9.9 0 012.05 12c0-5.48 4.52-9.95 10-9.95 2.67 0 5.18 1.04 7.07 2.92a9.91 9.91 0 012.93 7.04c0 5.48-4.52 9.99-10 9.99zm5.46-7.45c-.3-.15-1.79-.88-2.07-.98-.28-.1-.49-.15-.7.15-.21.3-.8.98-.98 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.7-.51h-.6c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.22 2.07.15.48 2.1 4.38 5.07 5.67.71.31 1.26.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z" />
                      </svg>
                      Send Screenshot on WhatsApp
                    </a>

                    <div className="flex items-center mt-5">
                      <input
                        type="checkbox"
                        id="screenshot-sent"
                        checked={screenshotSent}
                        onChange={(e) => setScreenshotSent(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="screenshot-sent"
                        className="ml-3 text-sm text-gray-700 cursor-pointer font-medium"
                      >
                        I have sent the payment screenshot
                      </label>
                    </div>
                  </div>
                )}
              </div>

              <button
                className={`w-full px-6 py-5 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isCheckoutButtonDisabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
                onClick={handleCheckout}
                disabled={isCheckoutButtonDisabled}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  "Complete order"
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-gray-50 px-6 py-8 lg:px-16 lg:py-12 border-l border-gray-200">
            <div className="max-w-lg mx-auto">
              <div className="space-y-6 mb-8">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-5 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-100"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-base leading-tight">{item.name}</p>
                      {item.size && <p className="text-sm text-gray-600 mt-1">Size: {item.size}</p>}
                      {item.colorName && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">Color:</span>
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.colorHex || "#6B7280" }}
                          />
                          <span className="text-sm text-gray-700">{item.colorName}</span>
                        </div>
                      )}
                      {item.measurements && Object.values(item.measurements).some((v) => v) && (
                        <div className="mt-2 text-xs text-gray-600 space-y-1">
                          <p className="font-medium text-gray-700">Measurements:</p>
                          <div className="grid grid-cols-2 gap-1">
                            {item.measurements.length && <p>Length: {item.measurements.length}</p>}
                            {item.measurements.chest && <p>Chest: {item.measurements.chest}</p>}
                            {item.measurements.waist && <p>Waist: {item.measurements.waist}</p>}
                            {item.measurements.hip && <p>Hip: {item.measurements.hip}</p>}
                            {item.measurements.sleeve && <p>Sleeve: {item.measurements.sleeve}</p>}
                            {item.measurements.armhole && <p>Armhole: {item.measurements.armhole}</p>}
                            {item.measurements.neckDepthFront && <p>Neck Front: {item.measurements.neckDepthFront}</p>}
                            {item.measurements.neckDepthBack && <p>Neck Back: {item.measurements.neckDepthBack}</p>}
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-gray-900 text-lg">
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="space-y-4">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600 font-medium">Subtotal • {cartItems.length} items</span>
                    <span className="text-gray-900 font-semibold">Rs {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600 font-medium">Delivery</span>
                    <span className="text-gray-900 font-semibold">{`Rs ${deliveryCharge.toLocaleString()}`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 block">PKR</span>
                        <span className="text-2xl font-bold text-gray-900">
                          Rs {totalWithDelivery.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {orderPlaced && <ReactConfetti />}
    </div>
  )
}
