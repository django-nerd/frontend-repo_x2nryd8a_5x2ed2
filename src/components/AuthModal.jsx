import { useState } from 'react'

export default function AuthModal({ open, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/signup'
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          mode === 'login' ? { email, password } : { name, email, password }
        )
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      onLoginSuccess(data)
      onClose()
    } catch (err) {
      alert('Authentication failed. Please try again.')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-md bg-slate-950 border border-blue-500/20 rounded-xl overflow-hidden">
        <div className="flex">
          <button onClick={() => setMode('login')} className={`flex-1 py-3 ${mode==='login' ? 'bg-blue-600 text-white' : 'bg-black/30 text-blue-200'}`}>Log in</button>
          <button onClick={() => setMode('signup')} className={`flex-1 py-3 ${mode==='signup' ? 'bg-blue-600 text-white' : 'bg-black/30 text-blue-200'}`}>Sign up</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-blue-200 text-sm mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" required />
            </div>
          )}
          <div>
            <label className="block text-blue-200 text-sm mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" required />
          </div>
          <div>
            <label className="block text-blue-200 text-sm mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" required />
          </div>
          <button type="submit" className="w-full py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold">{mode==='login' ? 'Log in' : 'Create account'}</button>
          <button type="button" onClick={onClose} className="w-full py-2 text-blue-300 hover:text-white">Cancel</button>
        </form>
      </div>
    </div>
  )
}
