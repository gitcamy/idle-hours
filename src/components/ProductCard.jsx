import ProductImage from './ProductImage'

export default function ProductCard({ product, onOpen, onAdd }) {
  return (
    <div className="product-card" onClick={() => onOpen(product)}>
      <div className="product-card-img">
        <ProductImage id={product.id} colors={product.colors} cat={product.cat} />
        <div className="product-card-overlay">
          <button className="overlay-btn" onClick={e => { e.stopPropagation(); onAdd(product) }}>
            Quick Add
          </button>
        </div>
      </div>
      <div className="product-card-cat">{product.cat}</div>
      <div className="product-card-name">{product.name}</div>
      <div className="product-card-price">${product.price}</div>
    </div>
  )
}
