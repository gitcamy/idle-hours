export default function ConfirmPage({ setPage }) {
  return (
    <div className="confirm-page page-enter">
      <div className="confirm-inner">
        <div className="confirm-script">Thank you</div>
        <div className="confirm-heading">Your order is on its way</div>
        <p className="confirm-body">
          We'll send a confirmation to your email shortly. Your pieces are being wrapped with care and will arrive within 5–7 days, depending on where in the world you are having your idle hours.
        </p>
        <button className="hero-cta" onClick={() => setPage('home')}>Return Home</button>
      </div>
    </div>
  )
}
