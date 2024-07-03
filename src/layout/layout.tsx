import { Outlet } from 'react-router-dom'
import { AsideBar } from '@/components'
import './style.css'
export function Layout() {
  return (
    <div className="layout">
      <AsideBar />
      <Outlet />
    </div>
  )
}
