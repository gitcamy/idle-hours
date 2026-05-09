import { C } from '../constants'
import ProductImage from '../components/ProductImage'

export default function CartPage({ cart, setCart, setPage }) {
  function updateQty(id, size, delta) {
    setCart(prev => prev.map(i =>
      i.id === id && i.size === size ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    ))
  }

  function remove(id, size) {
    setCart(prev => prev.filter(i => !(i.id === id && i.size === size)))
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal > 200 ? 0 : 12

  if (cart.length === 0) {
    return (
      <div className="cart-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Morello',cursive", fontSize: 64, color: C.cherry, marginBottom: 16 }}>Your bag</div>
        <p style={{ fontSize: 16, color: C.amethyst, marginBottom: 40 }}>is beautifully empty.</p>
        <button className="hero-cta" onClick={() => setPage('shop')}>Explore the Collection</button>
      </div>
    )
  }

  return (
    <div className="cart-page page-enter">
      <div className="cart-title">Your Bag</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 80, alignItems: 'start' }}>
        <div>
          {cart.map((item, i) => (
            <div key={`${item.id}-${item.size}-${i}`} className="cart-item">
              <div className="cart-item-thumb">
                <ProductImage
                  id={item.id}
                  colors={item.colors}
                  cat={item.cat}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-meta">{item.cat} · {item.size}</div>
                <div className="qty-ctrl">
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.size, -1)}>−</button>
                  <span style={{ fontSize: 14 }}>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.size, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => remove(item.id, item.size)}>Remove</button>
              </div>
              <div style={{ fontSize: 15, whiteSpace: 'nowrap' }}>${item.price * item.qty}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="order-summary-box">
            <div className="order-summary-title">Order Summary</div>
            <div className="order-line"><span>Subtotal</span><span>${subtotal}</span></div>
            <div className="order-line"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping}`}</span></div>
            {subtotal < 200 && (
              <p style={{ fontSize: 12, color: C.amethyst, marginBottom: 12 }}>Free shipping on orders over $200</p>
            )}
            <hr className="order-divider" />
            <div className="order-line" style={{ fontWeight: 500 }}><span>Total</span><span>${subtotal + shipping}</span></div>
            <button className="checkout-btn" onClick={() => setPage('checkout')}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
