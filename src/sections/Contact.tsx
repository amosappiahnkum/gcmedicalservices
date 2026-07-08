import { motion } from 'framer-motion'
import { Mail, Clock, MessageCircle } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { stagger, scaleIn, viewportOnce } from '../lib/motion'

const WA_NUMBERS = [
  { display: '024 790 9665', href: 'https://wa.me/233247909665' },
  { display: '020 491 7187', href: 'https://wa.me/233204917187' },
]

const EMAIL = 'gcmedicalservices@outlook.com'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.852L.057 23.58a.75.75 0 0 0 .93.93l5.727-1.465A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.504-5.17-1.385l-.37-.218-3.833.98.999-3.832-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed (Emergency: 24/7)' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <SectionLabel
          eyebrow="Reach us"
          heading="Get in Touch"
          body="We're always here when you need us. Choose the most convenient way to reach our team."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* WhatsApp card */}
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl border border-gray-100  p-6 space-y-4"
          >
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
              <MessageCircle size={20} className="text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-0.5">WhatsApp</h3>
              <p className="text-xs text-gray-400">Chat with us directly — fast responses</p>
            </div>
            <div className="space-y-2.5">
              {WA_NUMBERS.map(n => (
                <a
                  key={n.href}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-3 transition-colors no-underline group"
                >
                  <WhatsAppIcon size={18} />
                  <div>
                    <div className="font-semibold text-sm">{n.display}</div>
                    <div className="text-green-100 text-[11px]">Open chat →</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email card */}
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl border border-gray-100  p-6 space-y-4"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
              <Mail size={20} className="text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Email Us</h3>
              <p className="text-xs text-gray-400">We'll reply within one business day</p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-4 py-3.5 transition-colors no-underline"
            >
              <Mail size={18} />
              <div>
                <div className="font-semibold text-sm break-all">{EMAIL}</div>
                <div className="text-teal-100 text-[11px]">Send email →</div>
              </div>
            </a>
            <p className="text-xs text-gray-400">
              For appointment bookings, referrals, medical reports and general enquiries.
            </p>
          </motion.div>

          {/* Hours card */}
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl border border-gray-100  p-6 space-y-4"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <Clock size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Opening Hours</h3>
              <p className="text-xs text-gray-400">Emergency services available 24/7</p>
            </div>
            <div className="space-y-2">
              {HOURS.map(h => (
                <div key={h.day} className="flex flex-col gap-0.5 py-2 border-b border-gray-50 last:border-0">
                  <span className="text-xs font-semibold text-gray-700">{h.day}</span>
                  <span className={`text-xs ${h.time.includes('Emergency') ? 'text-teal-600 font-semibold' : 'text-gray-500'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
