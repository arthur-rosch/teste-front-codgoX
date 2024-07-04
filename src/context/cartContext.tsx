import React, { createContext, useReducer, useEffect, ReactNode } from 'react'
import { Item } from '@/utils/utils'

interface CartItem extends Item {
  quantidade: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; item: Item; quantidade: number }
  | { type: 'REMOVE_ITEM'; itemId: number }
  | { type: 'CLEAR_CART' }

const initialState: CartState = {
  items: [],
}

export const CartContext = createContext<{
  state: CartState
  addToCart: (item: Item, quantidade: number) => void
  removeFromCart: (itemId: number) => void
  getTotalPrice: () => number
  clearCart: () => void
}>({
  state: initialState,
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalPrice: () => 0,
  clearCart: () => {},
})

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      // eslint-disable-next-line no-case-declarations
      const existingItem = state.items.find(
        (item) => item.id === action.item.id,
      )

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantidade: item.quantidade + action.quantidade }
            : item,
        )
        return { ...state, items: updatedItems }
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.item, quantidade: action.quantidade },
          ],
        }
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((cartItem) => cartItem.id !== action.itemId),
      }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      }

    default:
      return state
  }
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item: Item, quantidade: number) => {
    dispatch({ type: 'ADD_ITEM', item, quantidade })
  }

  const removeFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', itemId })
  }

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      return total + item.preco * item.quantidade
    }, 0)
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, getTotalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
