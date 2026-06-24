import { useEffect, useRef } from 'react'

export default function Hero() {
  const h1Ref = useRef(null)

  useEffect(() => {
    const el = h1Ref.current
    if (!el) return
    const full = "Hey, I'm Nani"
    el.textContent = ''
    el.style.opacity = '1'
    let i = 0
    let timeout
    function type() {
      if (i <= full.length) {
        el.textContent = full.slice(0, i)
        i++
        timeout = setTimeout(type, 45)
      }
    }
    const initial = setTimeout(type, 400)
    return () => { clearTimeout(initial); clearTimeout(timeout) }
  }, [])

  return (
    <section className="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="avatar-ring">
          <div className="avatar-inner" style={{ backgroundImage: 'url(/avatar.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div className="hero-eyebrow">
          <span className="dot-live" />
          Available &amp; open to connect
        </div>
        <h1 ref={h1Ref} />
        <p className="hero-sub">
          A curious mind passionate about <strong>Volleyball</strong>,{' '}
          <strong>Artificial Intelligence</strong>, and <strong>Music</strong>{' '}
          — always searching for what&apos;s next.
        </p>
        <div className="hero-btns">
          <a href="#about" className="btn btn-primary">✦ Explore my world</a>
          <a href="#contact" className="btn btn-outline">Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
