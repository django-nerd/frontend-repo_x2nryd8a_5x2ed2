import { Link, NavLink } from 'react-router-dom'

export default function SiteNavbar() {
  const navLink = ({ isActive }) => `px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-white/10 text-white' : 'text-blue-100 hover:text-white hover:bg-white/10'} transition`
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold">IG</span>
          </div>
          <div className="text-white font-semibold text-lg tracking-tight">Intelco Group</div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/solutions/home" className={navLink}>Home Solutions</NavLink>
          <NavLink to="/solutions/business" className={navLink}>Business Solutions</NavLink>
          <NavLink to="/services" className={navLink}>Services & Support</NavLink>
          <NavLink to="/company/about" className={navLink}>Company</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/store" className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow shadow-blue-500/30">Store</Link>
        </div>
      </div>
    </header>
  )
}
