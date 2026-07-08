import { motion } from 'framer-motion'
import {
  Stethoscope, UserCog, Baby, Salad, Activity,
  FlaskConical, Pill, ScanSearch, Building2, BedDouble, ClipboardPlus,
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { stagger, scaleIn, viewportOnce } from '../lib/motion'

const SERVICES = [
  {
    Icon: ClipboardPlus,
    title: 'Outpatient Services',
    desc: 'Comprehensive outpatient care covering a wide range of acute and chronic health concerns.',
    color: 'bg-teal-50 text-teal-600 ring-teal-100',
  },
  {
    Icon: Stethoscope,
    title: 'General Medical Consultation',
    desc: 'Thorough assessments and personalised treatment plans from experienced general practitioners.',
    color: 'bg-blue-50 text-blue-600 ring-blue-100',
  },
  {
    Icon: UserCog,
    title: 'Specialist Consultation',
    desc: 'Access to qualified specialists across multiple disciplines for complex conditions.',
    color: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
  },
  {
    Icon: Baby,
    title: 'Pediatric Care',
    desc: 'Dedicated, child-friendly care from infancy through adolescence by paediatric experts.',
    color: 'bg-sky-50 text-sky-600 ring-sky-100',
  },
  {
    Icon: Salad,
    title: 'Dietitian Services',
    desc: 'Tailored nutrition counselling and dietary plans to support your health goals.',
    color: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  },
  {
    Icon: Activity,
    title: 'Chronic Disease Management',
    desc: 'Structured programmes for diabetes, hypertension, asthma and other long-term conditions.',
    color: 'bg-rose-50 text-rose-500 ring-rose-100',
  },
  {
    Icon: FlaskConical,
    title: 'Laboratory Services',
    desc: 'State-of-the-art diagnostic testing with fast, accurate results for informed decisions.',
    color: 'bg-violet-50 text-violet-600 ring-violet-100',
  },
  {
    Icon: Pill,
    title: 'Pharmacy',
    desc: 'In-house pharmacy dispensing prescription and over-the-counter medications safely.',
    color: 'bg-amber-50 text-amber-600 ring-amber-100',
  },
  {
    Icon: ScanSearch,
    title: 'Medical Screening',
    desc: 'Preventive health screenings to detect conditions early and protect your long-term health.',
    color: 'bg-cyan-50 text-cyan-600 ring-cyan-100',
  },
  {
    Icon: Building2,
    title: 'Corporate Screening',
    desc: 'Comprehensive occupational health checks and wellness programmes for organisations.',
    color: 'bg-orange-50 text-orange-600 ring-orange-100',
  },
  {
    Icon: BedDouble,
    title: 'Inpatient Care',
    desc: 'Round-the-clock monitoring and compassionate care for admitted patients.',
    color: 'bg-teal-50 text-teal-700 ring-teal-100',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <SectionLabel
          eyebrow="What we offer"
          heading="Our Medical Services"
          body="From general consultations to specialist care, we provide a full spectrum of healthcare services designed around your needs."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SERVICES.map(s => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ring-1 ${s.color}`}>
                <s.Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-auto pt-2">
                <a
                  href="#appointment"
                  className="text-xs font-semibold text-teal-600 hover:text-teal-700 no-underline group-hover:underline"
                >
                  Book this service →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
