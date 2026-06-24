import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function init() {
      stars = []
      for (let i = 0; i < 180; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.3 + 0.05,
          dir: Math.random() > 0.5 ? 1 : -1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.a += s.speed * 0.01 * s.dir
        if (s.a > 1 || s.a < 0) s.dir *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,220,255,${s.a})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas id="stars" ref={canvasRef} />
}
