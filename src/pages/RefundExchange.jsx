import React from 'react';

// Make sure this is in your index.html <head> if not already
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">

const RefundExchange = () => {
  return (
    <div className="min-h-screen flex justify-center px-4 py-16 md:py-24">
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-black mb-8 pt-20 md:pt-28 text-left"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Return & Exchange Policy
        </h1>

        {/* Policy Content */}
        <div className="text-lg text-gray-800 space-y-4 text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
          <p>
            At <strong>Palfrey&گُلابو</strong>, every creation is individually crafted to order — tailored to each client’s preferences, measurements, and chosen details. These are custom, high-value pieces that reflect the artistry and precision of bespoke craftsmanship.
          </p>

          <p>
            Because each order is made specifically for you, and cannot be resold or repurposed, we follow a strict <strong>No Refund and No Exchange</strong> policy. This applies to all products, including bespoke, customized, and discounted items.
          </p>

          <p>
            We request all clients to review their order details, measurements, and preferences carefully before confirming the purchase.  
            If measurements or order information are not provided within six (6) months of confirmation, the order will be considered cancelled and non-refundable.
          </p>

          <p>
            Our team performs detailed quality checks before dispatch. In the rare event of a manufacturing defect or incorrect delivery, our customer care team will review the case and, at its sole discretion, determine the appropriate resolution.
          </p>

          <p>
            For any questions or assistance, please contact us at <strong>info@palfreyandgulabo.com</strong> within 48 hours of receiving your order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundExchange;
