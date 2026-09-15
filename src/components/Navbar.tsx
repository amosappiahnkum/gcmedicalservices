import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from "react";
import {NAV} from "@/utils";
import {Menu, X} from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, {passive: true})
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
                        {menuOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -8}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -8}}
                        transition={{duration: 0.2}}
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