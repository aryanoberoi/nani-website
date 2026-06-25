import { useEffect, useRef, useState } from 'react'

export default function WelcomeAudio() {
  const audioRef = useRef(null)
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Try autoplay; if blocked, play on first user interaction
    const tryPlay = () => {
      audio.play().then(() => setPlayed(true)).catch(() => {})
    }

    tryPlay()

    const onInteract = () => {
      if (!played) {
        tryPlay()
        window.removeEventListener('click', onInteract)
        window.removeEventListener('touchstart', onInteract)
        window.removeEventListener('keydown', onInteract)
      }
    }

    window.addEventListener('click', onInteract)
    window.addEventListener('touchstart', onInteract)
    window.addEventListener('keydown', onInteract)

    return () => {
      window.removeEventListener('click', onInteract)
      window.removeEventListener('touchstart', onInteract)
      window.removeEventListener('keydown', onInteract)
    }
  }, [played])

  return <audio ref={audioRef} src="/welcome.mp3" preload="auto" />
}
