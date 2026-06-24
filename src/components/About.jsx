import useReveal from './useReveal'

const hobbies = [
  { icon: '🏐', color: 'cyan', name: 'Volleyball', desc: 'Team sport, strategy & adrenaline' },
  { icon: '🤖', color: 'purple', name: 'Artificial Intelligence', desc: 'Exploring how machines learn & think' },
  { icon: '🎵', color: 'pink', name: 'Music', desc: 'Finding the perfect soundtrack to life' },
  { icon: '🔍', color: 'gold', name: 'Searching New Things', desc: 'Curiosity is my superpower' },
]

export default function About() {
  const headerRef = useReveal()
  const textRef = useReveal()
  const hobbiesRef = useReveal()

  return (
    <section className="section" id="about">
      <div className="wrap">
        <div ref={headerRef} className="reveal">
          <p className="section-label">About me</p>
          <h2 className="section-title">Who is <span>Nani?</span></h2>
          <div className="divider" />
        </div>
        <div className="about-grid">
          <div ref={textRef} className="reveal about-text">
            <p>
              Hi there! I&apos;m <strong>Nani</strong> — a curious, energetic person who loves to explore
              the world both on and off the court. Whether I&apos;m diving for a volleyball,
              diving into an AI research paper, or discovering a new track that hits just right,
              I&apos;m always chasing that spark of something new.
            </p>
            <p>
              I genuinely believe that learning never stops. Every day is a chance to level up —
              whether that&apos;s understanding how a machine learning model works, improving my
              serve, or stumbling upon a song that perfectly matches my mood.
            </p>
            <p>
              I love meeting people, sharing ideas, and connecting with anyone who&apos;s just as
              excited about life as I am. Scroll down, explore, and feel free to reach out — I&apos;d
              love to hear from you! 🚀
            </p>
            <div style={{ marginTop: '28px' }}>
              <a href="#contact" className="btn btn-ghost" style={{ borderRadius: '50px' }}>Let&apos;s connect ↗</a>
            </div>
          </div>

          <div ref={hobbiesRef} className="reveal">
            <p className="hobbies-title">My Interests</p>
            <div className="hobbies">
              {hobbies.map(h => (
                <div key={h.name} className="hobby-card">
                  <div className={`hobby-icon ${h.color}`}>{h.icon}</div>
                  <div className="hobby-info">
                    <strong>{h.name}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
