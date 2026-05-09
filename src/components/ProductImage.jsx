export default function ProductImage({ id, colors, cat, src, alt, large = false }) {
  const [c1, c2] = colors
  const pid = `p${id}`
  const w = 300
  const h = large ? 500 : 380
  const catLabel = cat.toUpperCase()

  if (src) {
    return (
      <img
        src={src}
        alt={alt || cat}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    )
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={pid} patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(30)">
          <rect width="7" height="14" fill={c1} />
          <rect x="7" width="7" height="14" fill={c2} />
        </pattern>
        <linearGradient id={`g${pid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".18" />
          <stop offset="1" stopColor="#000" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${pid})`} />
      <rect width={w} height={h} fill={`url(#g${pid})`} />
      <text x="50%" y="88%" textAnchor="middle" fontFamily="'EB Garamond', serif" fontSize="9" letterSpacing="3" fill="rgba(255,255,255,0.55)">{catLabel}</text>
    </svg>
  )
}
