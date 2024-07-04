import { Layout } from './layout/layout'
import { Cart, Home, ProductDetail } from './pages'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}
