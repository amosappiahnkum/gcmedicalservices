import { motion } from 'framer-motion'
import { FlaskConical, CheckCircle2 } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { stagger, fadeUp, scaleIn, viewportOnce } from '../lib/motion'

const GROUPS = [
  {
    category: 'Haematology',
    icon: '🩸',
    accent: 'border-red-400',
    bg: 'bg-red-50',
    badge: 'bg-red-100 text-red-700',
    dot: 'bg-red-400',
    tests: [
      'Full Blood Count (FBC)',
      'Blood Grouping',
      'Hb Electrophoresis',
      'Sickling Test',
      'G6PD Test',
    ],
  },
  {
    category: 'Biochemistry',
    icon: '🧪',
    accent: 'border-blue-400',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-400',
    tests: [
      'Renal Function Test (RFT)',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'HbA1c',
      'Cardiac Enzymes',
    ],
  },
  {
    category: 'Serology & Immunology',
    icon: '🔬',
    accent: 'border-violet-400',
    bg: 'bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
    dot: 'bg-violet-400',
    tests: [
      'Hepatitis B',
      'Hepatitis C',
      'HIV',
      'Syphilis',
      'Typhoid (Widal)',
      'H. pylori',
    ],
  },
  {
    category: 'Parasitology & Microbiology',
    icon: '🧫',
    accent: 'border-emerald-400',
    bg: 'bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-400',
    tests: [
      'Malaria Tests',
      'Urine Tests',
      'Stool Test',
    ],
  },
]

export default function Lab() {
  return (
    <section id="lab" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <SectionLabel
          eyebrow="Diagnostics"
          heading="Laboratory Investigations"
          body="Accurate, fast diagnostic testing across a comprehensive range of specialties — all under one roof."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-5 mb-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {GROUPS.map(g => (
            <motion.div
              key={g.category}
              variants={scaleIn}
              className={`rounded-2xl p-6 ${g.bg}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${g.badge}`}>
                  {g.category}
                </span>
              </div>
              <ul className="space-y-2">
                {g.tests.map(t => (
                  <li key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className={`flex-shrink-0 ${g.dot.replace('bg-', 'text-')}`} />
                    <span className="text-gray-700 text-sm font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-2xl px-5 py-4"
        >
          <FlaskConical size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-teal-800">
            <span className="font-semibold">Additional investigations available on request.</span>{' '}
            If you require a test not listed above, please contact our laboratory team — we offer a broad
            range of specialised diagnostic services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
