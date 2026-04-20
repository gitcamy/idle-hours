export default function Footer({ setPage }) {
  return (
    <>
      <footer>
        <div>
          <div className="footer-logo">Idle Hours</div>
          <div className="footer-tagline">For the hours between waking<br />and the world.</div>
        </div>
        <div>
          <div className="footer-heading">Navigate</div>
          <span className="footer-link" onClick={() => setPage('home')}>Home</span>
          <span className="footer-link" onClick={() => setPage('shop')}>Shop</span>
          <span className="footer-link" onClick={() => setPage('about')}>About</span>
          <span className="footer-link" onClick={() => setPage('cart')}>Bag</span>
        </div>
        <div>
          <div className="footer-heading">Connect</div>
          <span className="footer-link">Instagram</span>
          <span className="footer-link">Pinterest</span>
          <span className="footer-link">Newsletter</span>
          <span className="footer-link">Press Enquiries</span>
        </div>
      </footer>
      <div className="footer-bottom">© 2026 Idle Hours. All rights reserved. Made slowly.</div>
    </>
  )
}
