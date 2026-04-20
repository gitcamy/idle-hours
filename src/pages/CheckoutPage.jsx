import { useState } from 'react'
import { C } from '../constants'

export default function CheckoutPage({ cart, onConfirm }) {
  const [step, setStep] = useState('address')
  const [addr, setAddr] = useState({ name: '', email: '', address: '', city: '', zip: '', country: '' })
  const [pay, setPay] = useState({ card: '', expiry: '', cvc: '' })

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal > 200 ? 0 : 12

  function handleAddrSubmit(e) {
    e.preventDefault()
    setStep('payment')
  }

  function handlePaySubmit(e) {
    e.preventDefault()
    onConfirm()
  }

  return (
    <div className="checkout-page page-enter">
      <div style={{ display: 'flex', gap: 16, marginBottom: 48, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>
        <span style={{ color: step === 'address' ? C.cherry : C.amethyst }}>Delivery</span>
        <span style={{ color: 'rgba(0,0,0,.2)' }}>—</span>
        <span style={{ color: step === 'payment' ? C.cherry : C.amethyst }}>Payment</span>
      </div>

      <div className="checkout-grid">
        <div>
          {step === 'address' && (
            <form onSubmit={handleAddrSubmit}>
              <div className="form-heading">Delivery Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First & Last Name</label>
                  <input required className="form-input" placeholder="Your name" value={addr.name} onChange={e => setAddr({ ...addr, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input required type="email" className="form-input" placeholder="you@example.com" value={addr.email} onChange={e => setAddr({ ...addr, email: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Street Address</label>
                <input required className="form-input" placeholder="123 Somewhere Lane" value={addr.address} onChange={e => setAddr({ ...addr, address: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input required className="form-input" value={addr.city} onChange={e => setAddr({ ...addr, city: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Postcode</label>
                  <input required className="form-input" value={addr.zip} onChange={e => setAddr({ ...addr, zip: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Country</label>
                <input required className="form-input" placeholder="United States" value={addr.country} onChange={e => setAddr({ ...addr, country: e.target.value })} />
              </div>
              <button type="submit" className="submit-btn">Continue to Payment</button>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handlePaySubmit}>
              <div className="form-heading">Payment</div>
              <div className="form-group">
                <label className="form-label">Card Number</label>
                <input required className="form-input" placeholder="•••• •••• •••• ••••" value={pay.card} onChange={e => setPay({ ...pay, card: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Expiry</label>
                  <input required className="form-input" placeholder="MM / YY" value={pay.expiry} onChange={e => setPay({ ...pay, expiry: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">CVC</label>
                  <input required className="form-input" placeholder="•••" value={pay.cvc} onChange={e => setPay({ ...pay, cvc: e.target.value })} />
                </div>
              </div>
              <div style={{ marginTop: 8, marginBottom: 24, fontSize: 12, color: C.amethyst, letterSpacing: '.05em' }}>
                Your payment is encrypted and secure. This is a demo — no real charge will be made.
              </div>
              <button type="submit" className="submit-btn">Place Order · ${subtotal + shipping}</button>
            </form>
          )}
        </div>

        <div className="order-summary-box" style={{ position: 'sticky', top: 120 }}>
          <div className="order-summary-title">Your Order</div>
          {cart.map((item, i) => (
            <div key={i} className="order-line">
              <span className="order-line-name">
                {item.name} <span style={{ fontSize: 12, color: C.amethyst }}>× {item.qty}</span>
              </span>
              <span>${item.price * item.qty}</span>
            </div>
          ))}
          <hr className="order-divider" />
          <div className="order-line"><span>Subtotal</span><span>${subtotal}</span></div>
          <div className="order-line"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping}`}</span></div>
          <hr className="order-divider" />
          <div className="order-line" style={{ fontWeight: 500, fontSize: 16 }}><span>Total</span><span>${subtotal + shipping}</span></div>
        </div>
      </div>
    </div>
  )
}
