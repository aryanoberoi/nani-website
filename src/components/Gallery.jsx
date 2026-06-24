import useReveal from './useReveal'

const photos = [
  { label: '📸 Photo 1', text: 'Your best photo here', big: true },
  { label: '📸 Photo 2', text: 'Photo 2' },
  { label: '📸 Photo 3', text: 'Photo 3' },
  { label: '📸 Photo 4', text: 'Photo 4' },
  { label: '📸 Photo 5', text: 'Your favourite shot', big: true },
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
            <div key={p.label} className={`photo${p.big ? ' big' : ''}`}>
              <div className="photo-overlay">
                <span className="photo-label">{p.label}</span>
              </div>
              <span>{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
