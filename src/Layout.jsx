import SiteNavbar from './components/SiteNavbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SiteNavbar />
      <Outlet />
    </div>
  )
}
