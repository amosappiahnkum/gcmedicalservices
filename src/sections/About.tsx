import { motion } from 'framer-motion'
import { ShieldCheck, Users, Award, HeartPulse } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { fadeUp, stagger, scaleIn, slideLeft, viewportOnce } from '../lib/motion'

const PILLARS = [
  {
    Icon: ShieldCheck,
    title: 'Trusted Care',
    body: 'Decades of clinical excellence built on patient trust and evidence-based medicine.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    Icon: Users,
    title: 'Expert Team',
    body: 'Qualified physicians, specialists and allied health professionals dedicated to your wellbeing.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    Icon: Award,
    title: 'Quality Standards',
    body: 'Accredited facilities and rigorous quality protocols ensuring safe, effective treatment.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    Icon: HeartPulse,
    title: 'Patient-Centred',
    body: 'Your comfort, dignity and health outcomes are at the heart of everything we do.',
    color: 'bg-rose-50 text-rose-500',
  },
]

const STATS = [
  { value: '10+', label: 'Years of Service' },
  { value: '5,000+', label: 'Patients Served' },
  { value: '11+', label: 'Services Offered' },
  { value: '24/7', label: 'Emergency Support' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel
              eyebrow="About Us"
              heading="A Clinic You Can Count On"
              body="GC Medical Services is a trusted healthcare provider committed to delivering comprehensive, compassionate medical care. From routine check-ups to specialist consultations and advanced diagnostics, our experienced team puts your health first — every single visit."
            />

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {STATS.map(s => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="text-center bg-gray-50 rounded-xl py-4 px-2"
                >
                  <div className="text-2xl font-extrabold text-teal-600 leading-none">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#services"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="inline-flex items-center gap-2 mt-8 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors no-underline  shadow-teal-200"
            >
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {PILLARS.map(p => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.color}`}>
                  <p.Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
