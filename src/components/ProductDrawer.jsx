import { useState } from 'react'
import ProductImage from './ProductImage'

export default function ProductDrawer({ product, onClose, onAdd }) {
  const [size, setSize] = useState(null)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    const s = size || product.sizes[0]
    onAdd(product, s)
    setAdded(true)
    setTimeout(() => { setAdded(false); onClose() }, 1100)
  }

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={e => e.stopPropagation()}>
        <button
          className="drawer-close"
          onClick={onClose}
          style={{ position: 'sticky', top: 16, left: 'calc(100% - 44px)', display: 'block', marginLeft: 'auto' }}
        >
          ×
        </button>
        <div className="drawer-img">
          <ProductImage
            id={product.id}
            colors={product.colors}
            cat={product.cat}
            src={product.image}
            alt={product.name}
            large
          />
        </div>
        <div className="drawer-body">
          <div className="drawer-cat">{product.cat}</div>
          <div className="drawer-title">{product.name}</div>
          <div className="drawer-price">${product.price}</div>
          <div className="drawer-desc">{product.desc}</div>
          {product.sizes.length > 1 && (
            <>
              <div className="size-label">Size</div>
              <div className="size-options">
                {product.sizes.map(s => (
                  <button key={s} className={`size-btn${size === s ? ' selected' : ''}`} onClick={() => setSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}
          <button className="add-btn" onClick={handleAdd}>
            {added ? '✓ Added to Bag' : 'Add to Bag'}
          </button>
        </div>
      </div>
    </div>
  )
}
