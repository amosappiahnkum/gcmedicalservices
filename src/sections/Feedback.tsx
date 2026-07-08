import { motion } from 'framer-motion'
import { Star, ExternalLink, Heart } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

// Replace with your actual Google Forms link
const FORM_LINK = 'https://forms.gle/your-form-id'

const ASPECTS = [
  { label: 'Doctor Consultation', emoji: '🩺' },
  { label: 'Nursing Care', emoji: '👩‍⚕️' },
  { label: 'Lab Services', emoji: '🔬' },
  { label: 'Pharmacy', emoji: '💊' },
  { label: 'Cleanliness', emoji: '✨' },
  { label: 'Wait Time', emoji: '⏱' },
]

export default function Feedback() {
  return (
    <section id="feedback" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel
              eyebrow="Your opinion matters"
              heading="Customer Satisfaction"
              body="Thank you for choosing GC Medical Services. Your feedback helps us continually improve and deliver the highest standard of care."
            />

            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-gray-600 text-sm ml-1 font-medium">We aim for 5 stars</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Our <span className="font-semibold text-gray-800">2-minute survey</span> covers every aspect
              of your visit — from reception to consultation. Your honest responses shape how we serve you and
              every patient that walks through our doors.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors no-underline  shadow-teal-200"
              >
                <ExternalLink size={15} />
                Complete Customer Satisfaction Survey
              </motion.a>
            </div>
          </motion.div>

          {/* Right: aspect cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-5">
                <Heart size={16} className="text-teal-600 fill-teal-600" />
                <span className="text-sm font-semibold text-teal-800">We'd love your feedback on…</span>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                variants={stagger}
              >
                {ASPECTS.map(a => (
                  <motion.div
                    key={a.label}
                    variants={fadeUp}
                    className="bg-white rounded-xl p-3 flex flex-col items-center gap-2 text-center border border-teal-100 "
                  >
                    <span className="text-2xl">{a.emoji}</span>
                    <span className="text-xs font-medium text-gray-700 leading-snug">{a.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">💬</span>
              <p className="text-sm text-amber-800">
                <span className="font-semibold">Anonymous & confidential.</span>{' '}
                Your responses are never linked to your medical records and are used solely to improve our services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
