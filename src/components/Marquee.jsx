const marqueeText = 'vintage slips  ·  lace bralettes  ·  hand-dyed swim  ·  satin knot bags  ·  the in-between hours  ·  dressed with intention  ·  mornings that linger  ·  '

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {[0, 1].map(i => (
          <span key={i} className="marquee-text">{marqueeText.repeat(2)}</span>
        ))}
      </div>
    </div>
  )
}
