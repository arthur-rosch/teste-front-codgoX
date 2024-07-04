import { Router } from './Routes'
import { CartProvider } from '@/context/cartContext'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
