import { useState } from 'react'
import { C } from '../constants'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const CATEGORIES = ['All', 'Slips', 'Bralettes', 'Swim', 'Accessories']

export default function ShopPage({ products, onOpen, onAdd, setPage }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.cat === active)

  return (
    <div className="page-enter">
      <div className="shop-hero">
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.25em', textTransform: 'uppercase', color: C.amethyst, marginBottom: 16 }}>
            The Collection
          </div>
          <div className="section-heading" style={{ fontSize: 'clamp(42px,5vw,72px)' }}>Everything</div>
          <div className="shop-filters">
            {CATEGORIES.map(c => (
              <button key={c} className={`filter-btn${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="products-section">
        <div className="products-grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
          ))}
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  )
}
