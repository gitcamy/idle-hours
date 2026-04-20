import { C } from '../constants'
import Footer from '../components/Footer'

export default function AboutPage({ setPage }) {
  return (
    <div className="page-enter">
      <div className="about-hero">
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: '#1a1410', marginBottom: 20, opacity: .6 }}>
            Our Story
          </div>
          <div className="about-hero-title">About<br />Idle Hours</div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="about-label">The Beginning</div>
          <div className="about-heading">Born in the quiet hour before the world begins</div>
          <p className="about-body">Idle Hours started as a question: why do we rush the parts of the day that are entirely our own?</p>
          <p className="about-body">The hour of getting dressed. The slow morning before coffee turns cold. The long afternoon that asks nothing of you. These hours — intimate, unhurried, delicious — deserve beautiful things in them.</p>
          <p className="about-body">We design for the woman who dresses with intention, not urgency. Who finds pleasure in the ritual of getting ready, not just the result.</p>
        </div>
        <div className="about-right">
          <div className="about-label">The Making</div>
          <div className="about-heading">Considered, slowly, with great care</div>
          <p className="about-body">Each piece is developed over months. We work with small factories and independent dyers. We source natural and recycled fibres. We make limited quantities, on purpose.</p>
          <p className="about-body">Vintage slips inform our silhouettes. Hand-dyed fabrics carry gentle irregularity — proof of being made by a person, not a machine.</p>
          <p className="about-body">We believe clothing can be a form of self-tenderness. That the slip you put on in the morning is a quiet declaration: <em>I am worth the beautiful thing.</em></p>

          <div style={{ marginTop: 48, padding: '32px', background: C.pink }}>
            <div style={{ fontFamily: "'Morello', cursive", fontSize: 42, color: C.cherry, marginBottom: 8 }}>The Label</div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4a2a27' }}>Each piece carries our label — a small compass rose, a reminder to orient yourself toward pleasure. Toward slowness. Toward the idle hours.</p>
          </div>
        </div>
      </div>

      <div className="manifesto">
        <div className="manifesto-text">
          "Idle Hours is for the woman who slows down, on purpose."
        </div>
        <div className="manifesto-attr">— The Founder</div>
      </div>

      <Footer setPage={setPage} />
    </div>
  )
}
