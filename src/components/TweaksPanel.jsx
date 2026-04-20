import { C } from '../constants'

const opts = [
  { label: 'Parchment', val: '#FAF8F3' },
  { label: 'Cream', val: C.cream },
  { label: 'Shell Pink', val: C.pink },
  { label: 'Sardine', val: C.sardine },
]

export default function TweaksPanel({ bg, setBg, show }) {
  if (!show) return null

  return (
    <div className="tweaks-panel">
      <div className="tweaks-title">Tweaks</div>
      <div className="tweak-row">
        <span className="tweak-label">Page background</span>
        <div className="tweak-options">
          {opts.map(o => (
            <button key={o.val} className={`tweak-opt${bg === o.val ? ' active' : ''}`} onClick={() => setBg(o.val)}>
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
