export default function Nav({ setPage, cartCount, dark }) {
  return (
    <nav className={dark ? 'dark' : 'light'} style={{ background: 'transparent' }}>
      <div className="nav-links">
        <button className="nav-link" onClick={() => setPage('about')}>About</button>
        <button className="nav-link" onClick={() => setPage('shop')}>Shop</button>
      </div>
      <div className="nav-logo" onClick={() => setPage('home')}>Idle Hours</div>
      <div className="nav-right">
        <button className="nav-link" onClick={() => setPage('cart')}>
          Bag ({cartCount})
        </button>
      </div>
    </nav>
  )
}
