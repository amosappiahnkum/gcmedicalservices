import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, CheckCircle, Loader2 } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { slideLeft, slideRight, viewportOnce } from '../lib/motion'
import { submitAppointmentRequest } from '../lib/api'

function splitName(fullName: string): { first_name: string; last_name: string } {
  const parts = fullName.trim().split(/\s+/)
  return parts.length > 1
    ? { first_name: parts[0], last_name: parts.slice(1).join(' ') }
    : { first_name: parts[0], last_name: parts[0] }
}

const SERVICES = [
  'Outpatient (General)',
  'Outpatient (Specialist)',
  'Pediatric Care',
  'Dietitian Services',
  'Chronic Disease Management',
  'Laboratory Services',
  'Pharmacy',
  'Medical Screening',
  'Corporate Screening',
  'Inpatient Care',
]

const NUMBERS = [
  { label: '024 790 9665', wa: '233247909665' },
  { label: '020 491 7187', wa: '233204917187' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.852L.057 23.58a.75.75 0 0 0 .93.93l5.727-1.465A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.504-5.17-1.385l-.37-.218-3.833.98.999-3.832-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

const inputCls =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all'

const PERKS = [
  'No registration fee',
  'Same-day appointments available',
  'Experienced, friendly staff',
  'Private, comfortable consultation rooms',
]

export default function Appointment() {
  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [date,    setDate]    = useState('')
  const [service, setService] = useState('')
  const [sent,    setSent]    = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [submitError, setSubmitError] = useState('')

  function buildMessage() {
    return encodeURIComponent(
      `Hello GC Medical Services,\n\nI'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone || 'Not provided'}\nDate: ${date}\nService: ${service}\n\nThank you.`
    )
  }

  function handleBook(wa: string) {
    window.open(`https://wa.me/${wa}?text=${buildMessage()}`, '_blank')
    setSent(true)
  }

  async function handleSubmit() {
    if (!ready || submitting) return
    setSubmitting(true)
    setSubmitError('')
    try {
      const { first_name, last_name } = splitName(name)
      await submitAppointmentRequest({
        first_name,
        last_name,
        phone_number: phone,
        appointment_date: date,
        reason: `Requested service: ${service}`,
      })
      setSubmitted(true)
    } catch {
      setSubmitError("Couldn't send your request — please try WhatsApp instead, or call us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  const ready = name.trim() && phone.trim() && date && service

  return (
    <section id="appointment" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <SectionLabel
          eyebrow="Schedule a visit"
          heading="Book an Appointment"
          body="Fill in your details and send your booking directly via WhatsApp — we'll confirm within the hour."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-100  overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputCls}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="024 000 0000"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputCls}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Choose a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 space-y-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-sm text-teal-700 font-semibold py-2"
                >
                  <CheckCircle size={16} className="flex-shrink-0" />
                  Request received — our team will call you shortly to confirm.
                </motion.div>
              ) : !ready ? (
                <p className="text-xs text-gray-400 text-center">
                  Complete the required fields (<span className="text-rose-400">*</span>) to continue
                </p>
              ) : (
                <>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white rounded-xl py-3 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    {submitting ? <Loader2 size={16} className="animate-spin" /> : <CalendarCheck size={16} />}
                    {submitting ? 'Sending…' : 'Request Appointment'}
                  </button>

                  {submitError && (
                    <p className="text-xs text-rose-500 text-center">{submitError}</p>
                  )}

                  <div className="flex items-center gap-3 pt-1">
                    <span className="flex-1 h-px bg-gray-200" />
                    <span className="text-[11px] text-gray-400 uppercase tracking-widest">or message us</span>
                    <span className="flex-1 h-px bg-gray-200" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {NUMBERS.map(n => (
                      <button
                        key={n.wa}
                        onClick={() => handleBook(n.wa)}
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 font-semibold text-sm transition-colors cursor-pointer"
                      >
                        <WhatsAppIcon /> {n.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {sent && !submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-xs text-teal-600 font-semibold"
                >
                  <CheckCircle size={14} />
                  WhatsApp opened — complete your booking in chat.
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Side perks */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-6 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <CalendarCheck size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Why book with us?</h3>
              <ul className="space-y-3 mt-4">
                {PERKS.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-teal-100">
                    <CheckCircle size={14} className="text-emerald-300 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5 ">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Opening Hours
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mon – Fri</span>
                  <span className="font-medium text-gray-900">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-gray-100">
                  <span className="text-teal-600 font-semibold">Emergency</span>
                  <span className="font-bold text-teal-600">24 / 7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
