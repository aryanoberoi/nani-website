import useReveal from './useReveal'

const photos = [
  { src: '/photos/photo1.jpeg', label: 'Gym vibes 🔥', big: true },
  { src: '/photos/photo2.jpeg', label: 'Mirror check 💪' },
  { src: '/photos/photo3.jpeg', label: 'Retro mode 📺' },
  { src: '/photos/photo4.jpeg', label: 'In my bag 🎒' },
  { src: '/photos/photo5.jpeg', label: 'Back gains 🏋️', big: true },
]

export default function Gallery() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section" id="photos" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div ref={headerRef} className="reveal">
          <p className="section-label">Gallery</p>
          <h2 className="section-title">A peek into <span>my world</span></h2>
          <div className="divider" />
        </div>
        <div ref={gridRef} className="gallery-grid reveal">
          {photos.map(p => (
            <div
              key={p.label}
              className={`photo${p.big ? ' big' : ''}`}
              style={{ backgroundImage: `url(${p.src})` }}
            >
              <div className="photo-overlay">
                <span className="photo-label">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
