import useReveal from './useReveal'

export default function Contact() {
  const headerRef = useReveal()
  const directRef = useReveal()
  const socialRef = useReveal()

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div ref={headerRef} className="reveal">
          <p className="section-label">Say hello</p>
          <h2 className="section-title">Let&apos;s <span>connect</span></h2>
          <div className="divider" />
        </div>
        <div className="contact-wrapper">
          <div ref={directRef} className="contact-card reveal">
            <p style={{ color: 'var(--muted)', fontSize: '14px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Direct Contact
            </p>
            <a className="contact-item" href="tel:+919035186050">
              <div className="c-icon">📞</div>
              <div className="c-info">
                <strong>+91 9035186050</strong>
                <span>Call or WhatsApp me</span>
              </div>
            </a>
            <a className="contact-item" href="mailto:bodegnaneshwar9@gmail.com">
              <div className="c-icon">✉️</div>
              <div className="c-info">
                <strong>bodegnaneshwar9@gmail.com</strong>
                <span>Send me a message</span>
              </div>
            </a>
          </div>

          <div ref={socialRef} className="contact-card reveal">
            <p className="social-title">Find me on</p>
            <div className="socials">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn s-instagram">
                <span className="s-icon">📸</span>
                Instagram
                <span className="s-arrow">↗</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn s-facebook">
                <span className="s-icon">📘</span>
                Facebook
                <span className="s-arrow">↗</span>
              </a>
              <a href="https://wa.me/919035186050" target="_blank" rel="noopener noreferrer" className="social-btn s-whatsapp">
                <span className="s-icon">💬</span>
                WhatsApp
                <span className="s-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
