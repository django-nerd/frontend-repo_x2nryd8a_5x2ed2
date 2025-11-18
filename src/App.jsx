import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import CategorySidebar from './components/CategorySidebar'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import AuthModal from './components/AuthModal'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const [user, setUser] = useState(null)
  const [categories, setCategories] = useState({})
  const [selectedCat, setSelectedCat] = useState(null)
  const [products, setProducts] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [selectedCat, search])

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${baseUrl}/categories`)
      const data = await res.json()
      setCategories(data)
    } catch (e) { console.error(e) }
  }

  const fetchProducts = async () => {
    const qs = new URLSearchParams()
    if (selectedCat?.subcategory) qs.set('subcategory_id', selectedCat._id)
    else if (selectedCat?._id) qs.set('category_id', selectedCat._id)
    if (search) qs.set('q', search)
    try {
      const res = await fetch(`${baseUrl}/products?${qs.toString()}`)
      const data = await res.json()
      setProducts(data)
    } catch (e) { console.error(e) }
  }

  const handleSelectCategory = (cat) => {
    // if cat has parent, mark as subcategory
    const isSub = !!cat.parent_id
    setSelectedCat(isSub ? { ...cat, subcategory: true } : cat)
  }

  const handleAddToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.product_id === p._id)
      if (exists) {
        return prev.map(i => i.product_id === p._id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { product_id: p._id, name: p.name, quantity: 1, unit_price: p.price }]
    })
    setCartOpen(true)
  }

  const handleQtyChange = (id, qty) => {
    setCart(prev => prev.map(i => i.product_id === id ? { ...i, quantity: qty } : i))
  }

  const handleRemove = (id) => {
    setCart(prev => prev.filter(i => i.product_id !== id))
  }

  const handleCheckout = async () => {
    if (!user) { setAuthOpen(true); return }
    try {
      const res = await fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.user_id || user.id,
          email: user.email,
          items: cart,
          notes: '',
        })
      })
      if (!res.ok) throw new Error('Order failed')
      const data = await res.json()
      setCart([])
      setCartOpen(false)
      alert(`Order placed! ID: ${data.order_id}`)
    } catch (e) {
      alert('Failed to place order. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_top,rgba(37,99,235,0.15),transparent)]" />

      <Navbar
        user={user}
        onLoginClick={() => setAuthOpen(true)}
        onLogoutClick={() => setUser(null)}
        onCartToggle={() => setCartOpen(true)}
      />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CategorySidebar tree={categories} onSelect={handleSelectCategory} />
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                placeholder="Search components, tools, brands..."
                className="w-full h-12 pl-4 pr-4 rounded-xl bg-black/40 border border-blue-500/30 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button onClick={()=>setCartOpen(true)} className="px-4 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white">View order</button>
          </div>

          <ProductGrid products={products} onAddToCart={handleAddToCart} />
        </div>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
      />

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLoginSuccess={(u)=>setUser(u)}
      />
    </div>
  )
}

export default App
