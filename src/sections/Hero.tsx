import { motion } from 'framer-motion'
import { CalendarCheck, Phone, ChevronDown } from 'lucide-react'

function ClinicCross() {
  return (
    <svg viewBox="0 0 32 32" className="w-10 h-10 fill-white" aria-hidden="true">
      <rect x="12" y="2" width="8" height="28" rx="2" />
      <rect x="2" y="12" width="28" height="8" rx="2" />
    </svg>
  )
}

function Blob({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
    />
  )
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-700 text-white"
      aria-label="Hero"
    >
      <Blob className="w-[500px] h-[500px] bg-teal-400/20 -top-32 -left-40" />
      <Blob className="w-[400px] h-[400px] bg-cyan-300/15 -bottom-24 -right-24" />
      <Blob className="w-[300px] h-[300px] bg-white/10 top-10 right-1/3" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight"
            >
              GC Medical
              <span className="block text-cyan-200">Services</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-teal-100 text-lg leading-relaxed max-w-md"
            >
              Comprehensive healthcare you can trust — from diagnostics and specialist consultations
              to chronic disease management and inpatient care.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors no-underline shadow-lg shadow-black/10"
              >
                <CalendarCheck size={16} />
                Book Appointment
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors no-underline"
              >
                <Phone size={16} />
                Contact Us
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              {['Experienced Doctors', 'Modern Equipment', 'Affordable Care'].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-teal-100 text-xs font-medium">
                  <span className="text-emerald-300">✓</span> {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center gap-6 shadow-2xl">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
                  <ClinicCross />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">GC Medical</div>
                  <div className="text-teal-200 text-sm mt-1">Your Health. Our Priority.</div>
                </div>
                <div className="flex gap-3">
                  {['🩺', '🔬', '💊', '🏥'].map(e => (
                    <span key={e} className="text-xl">{e}</span>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="text-gray-800 font-bold text-sm">5,000+</div>
                <div className="text-gray-400 text-[10px]">Patients served</div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="text-white font-bold text-sm">24/7</div>
                <div className="text-emerald-100 text-[10px]">Emergency care</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}
