import { C } from '../constants'
import Marquee from '../components/Marquee'
import ProductCard from '../components/ProductCard'
import ProductImage from '../components/ProductImage'
import Footer from '../components/Footer'

export default function HomePage({ setPage, products, onOpen, onAdd }) {
  const featured = products.slice(0, 3)

  return (
    <div className="page-enter">
      <div className="hero" style={{ position: 'relative' }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: .45 }}
        >
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(250,248,243,0.55)', zIndex: 1 }} />
        <div className="hero-eyebrow fade-up">Spring · Summer 2026</div>
        <div className="hero-title-wrap fade-up fade-up-d1">
          <div className="hero-title">Idle Hours</div>
        </div>
        <div className="hero-sub fade-up fade-up-d2">
          For the hours between waking and the world.<br />
          Dressed with intent. Worn with pleasure.
        </div>
        <button className="hero-cta fade-up fade-up-d3" onClick={() => setPage('shop')}>
          Explore the Collection
        </button>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
        </div>
      </div>

      <Marquee />

      <div className="editorial">
        <div className="editorial-img">
          <ProductImage id={1} colors={['#e8dcd0', '#c9b8a8']} cat="Slips" large />
        </div>
        <div className="editorial-text">
          <div className="editorial-label">The Philosophy</div>
          <div className="editorial-heading">The hours that belong only to you</div>
          <div className="editorial-body">
            Before the obligations arrive. After the evening softens. Idle Hours was born in those in-between moments — the ones we rush through, but shouldn't.
            <br /><br />
            We make things to slow you down.
          </div>
          <button className="hero-cta" onClick={() => setPage('about')}>Our Story</button>
        </div>
      </div>

      <div className="products-section">
        <div className="products-header">
          <div className="section-heading">New Arrivals</div>
          <div className="section-sub">The pieces we've been waiting for</div>
        </div>
        <div className="products-grid">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <button className="hero-cta" onClick={() => setPage('shop')}>View All</button>
        </div>
      </div>

      <div className="manifesto">
        <div className="manifesto-text">
          "Getting dressed is a ritual. The slip you choose at eight in the morning is a decision about the kind of day you will have."
        </div>
        <div className="manifesto-attr">— Idle Hours</div>
      </div>

      <div className="editorial" style={{ direction: 'rtl' }}>
        <div style={{ direction: 'ltr' }} className="editorial-img">
          <ProductImage id={7} colors={['#81A9E7', '#6090d0']} cat="Swim" large />
        </div>
        <div style={{ direction: 'ltr', background: C.cream }} className="editorial-text">
          <div className="editorial-label">Swim</div>
          <div className="editorial-heading">Made for afternoons that stretch into evening</div>
          <div className="editorial-body">
            Swimwear for the beach you actually go to. Cut generously, tie thoughtfully — worn with the quiet confidence of someone who has nowhere to be.
          </div>
          <button className="hero-cta" onClick={() => setPage('shop')}>Shop Swim</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  )
}
