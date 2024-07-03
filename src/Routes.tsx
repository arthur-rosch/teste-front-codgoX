import { Home } from './pages'
import { Layout } from './layout/layout'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
