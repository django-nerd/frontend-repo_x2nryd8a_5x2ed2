import { useState } from 'react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handle = async (e)=>{
    e.preventDefault()
    const res = await fetch(`${baseUrl}/auth/login`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email,password})})
    if(!res.ok){ alert('Login failed'); return }
    const data = await res.json()
    alert(`Bienvenido, ${data.name || data.email}`)
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handle} className="space-y-4 bg-black/40 border border-blue-500/20 rounded-xl p-6">
          <div>
            <label className="block text-sm text-blue-200/90 mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" required />
          </div>
          <div>
            <label className="block text-sm text-blue-200/90 mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded bg-black/40 border border-blue-500/30 text-white" required />
          </div>
          <button type="submit" className="w-full py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold">Entrar</button>
        </form>
      </div>
    </div>
  )
}
