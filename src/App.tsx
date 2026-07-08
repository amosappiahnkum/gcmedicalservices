import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

import Hero        from './sections/Hero'
import About       from './sections/About'
import Services    from './sections/Services'
import Lab         from './sections/Lab'
import Appointment from './sections/Appointment'
import Feedback    from './sections/Feedback'
import Contact     from './sections/Contact'

const NAV = [
  { label: 'About',       href: '#about'       },
  { label: 'Services',    href: '#services'    },
  { label: 'Lab Tests',   href: '#lab'         },
  { label: 'Contact',     href: '#contact'     },
  { label: 'Feedback',    href: '#feedback'    },
]

const QUICK = [
  { label: 'About Us',    href: '#about'       },
  { label: 'Services',    href: '#services'    },
  { label: 'Lab Tests',   href: '#lab'         },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact',     href: '#contact'     },
  { label: 'Feedback',    href: '#feedback'    },
]

function ClinicCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className ?? 'w-5 h-5'} fill="currentColor">
      <rect x="12" y="2" width="8" height="28" rx="2" />
      <rect x="2" y="12" width="28" height="8" rx="2" />
    </svg>
  )
}

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md shadow-gray-100/60' : 'bg-white/90 backdrop-blur border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <img src='/logo.png' alt='Logo' height='auto' width='140'/>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors no-underline"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#appointment"
            className="hidden sm:inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors no-underline  shadow-teal-200"
          >
            Book Now
          </a>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1"
          >
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors no-underline"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center bg-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors no-underline"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
                <ClinicCross className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">GC Medical Services</div>
                <div className="text-teal-400 text-[10px] uppercase tracking-wide font-medium">Your Health. Our Priority.</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing trusted, comprehensive healthcare with experienced professionals and a commitment to quality patient care.
            </p>
            <div className="flex gap-3 pt-1">
              {(['FB', 'IG', 'TW'] as const).map(label => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-teal-700 flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <span className="text-[9px] font-bold text-gray-400">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK.map(q => (
                <li key={q.href}>
                  <a href={q.href} className="text-sm hover:text-teal-400 transition-colors no-underline">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-400 flex-shrink-0" />
                <a href="https://wa.me/233247909665" target="_blank" rel="noopener noreferrer"
                   className="hover:text-teal-400 transition-colors no-underline">
                  024 790 9665
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-400 flex-shrink-0" />
                <a href="https://wa.me/233204917187" target="_blank" rel="noopener noreferrer"
                   className="hover:text-teal-400 transition-colors no-underline">
                  020 491 7187
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:gcmedicalservices@outlook.com"
                   className="hover:text-teal-400 transition-colors no-underline break-all">
                  gcmedicalservices@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} GC Medical Services. All rights reserved.</span>
          <span className="text-gray-600">Powered by DigiHealth care</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Lab />
        <Appointment />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
