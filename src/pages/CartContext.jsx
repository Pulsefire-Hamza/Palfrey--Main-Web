"use client"

import { createContext, useContext, useState } from "react"

// Create CartContext
const CartContext = createContext()

// Custom hook to access cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// CartProvider component that provides cart context to the rest of the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.withDupatta === product.withDupatta &&
          item.size === product.size
      )

      if (existingProduct) {
        // If product already exists with same id, dupatta, and size → increase quantity
        return prevItems.map((item) =>
          item.id === product.id &&
          item.withDupatta === product.withDupatta &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }

      // Otherwise, add as a new item
      return [...prevItems, { ...product, quantity: product.quantity }]
    })
  }

  // Remove product from cart
  const removeFromCart = (productId, withDupatta, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          item.id !== productId ||
          item.withDupatta !== withDupatta ||
          item.size !== size
      )
    )
  }

  // Update product quantity
  const updateQuantity = (productId, withDupatta, size, quantity) => {
    if (quantity < 1) return // prevent quantity below 1

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId &&
        item.withDupatta === withDupatta &&
        item.size === size
          ? { ...item, quantity }
          : item
      )
    )
  }

  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  // Clear entire cart
  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
