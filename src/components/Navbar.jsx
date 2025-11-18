import { useState } from 'react'

export default function Navbar({ user, onLoginClick, onLogoutClick, onCartToggle }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold">EH</span>
          </div>
          <div className="text-white font-semibold text-lg tracking-tight">ElectroHub</div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onCartToggle} className="relative px-3 py-2 rounded-lg text-blue-100 hover:text-white hover:bg-blue-500/20 transition">
            <span className="i-lucide-shopping-cart" />
            Cart
          </button>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-blue-200 text-sm hidden sm:block">Hi, {user.name}</span>
              <button onClick={onLogoutClick} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">Log out</button>
            </div>
          ) : (
            <button onClick={onLoginClick} className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow shadow-blue-500/30">Log in</button>
          )}
        </div>
      </div>
    </header>
  )
}
