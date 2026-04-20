import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import ProductDrawer from './components/ProductDrawer'
import TweaksPanel from './components/TweaksPanel'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ConfirmPage from './pages/ConfirmPage'
import { PRODUCTS } from './data/products'

export default function App() {
  const [page, setPage] = useState(() => localStorage.getItem('ih-page') || 'home')
  const [cart, setCart] = useState([])
  const [drawerProduct, setDrawerProduct] = useState(null)
  const [showTweaks, setShowTweaks] = useState(false)
  const [bgColor, setBgColor] = useState('#FAF8F3')

  useEffect(() => {
    localStorage.setItem('ih-page', page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  useEffect(() => {
    function onMsg(e) {
      if (e.data?.type === '__activate_edit_mode') setShowTweaks(true)
      if (e.data?.type === '__deactivate_edit_mode') setShowTweaks(false)
    }
    window.addEventListener('message', onMsg)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', onMsg)
  }, [])

  function addToCart(product, size) {
    const s = size || product.sizes[0]
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === s)
      if (existing) return prev.map(i => i.id === product.id && i.size === s ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, size: s, qty: 1 }]
    })
    setDrawerProduct(null)
  }

  function handleConfirm() {
    setCart([])
    setPage('confirm')
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <div style={{ background: bgColor, minHeight: '100vh' }}>
      <Nav setPage={setPage} cartCount={cartCount} dark={false} />

      {page === 'home'     && <HomePage setPage={setPage} products={PRODUCTS} onOpen={setDrawerProduct} onAdd={p => addToCart(p)} />}
      {page === 'shop'     && <ShopPage products={PRODUCTS} onOpen={setDrawerProduct} onAdd={p => addToCart(p)} setPage={setPage} />}
      {page === 'about'    && <AboutPage setPage={setPage} />}
      {page === 'cart'     && <CartPage cart={cart} setCart={setCart} setPage={setPage} />}
      {page === 'checkout' && <CheckoutPage cart={cart} setPage={setPage} onConfirm={handleConfirm} />}
      {page === 'confirm'  && <ConfirmPage setPage={setPage} />}

      {drawerProduct && (
        <ProductDrawer product={drawerProduct} onClose={() => setDrawerProduct(null)} onAdd={addToCart} />
      )}

      <TweaksPanel bg={bgColor} setBg={setBgColor} show={showTweaks} />
    </div>
  )
}
