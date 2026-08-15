import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Reservations from './pages/Reservations'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-16 text-center">
      <p className="font-serif text-6xl font-semibold text-caramel">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-espresso">This page was served elsewhere.</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The link may be old, or the page may have been renamed. The coffee, however, is still here.
      </p>
      <a
        href="/"
        className="mt-6 rounded-full bg-caramel px-6 py-3 text-sm font-medium text-warmwhite transition-colors hover:bg-caramel-dark"
      >
        Back to Home
      </a>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
