import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Starfield from './components/Starfield'
import WelcomeAudio from './components/WelcomeAudio'

export default function App() {
  return (
    <>
      <WelcomeAudio />
      <Starfield />
      <div className="grid-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}
