import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

interface Props {
  eyebrow: string
  heading: string
  body?: string
  center?: boolean
}

export default function SectionLabel({ eyebrow, heading, body, center }: Props) {
  const align = center ? 'text-center items-center' : ''
  return (
    <motion.div
      className={`flex flex-col gap-2 mb-10 ${align}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">{eyebrow}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{heading}</h2>
      {body && <p className="text-gray-500 text-sm max-w-xl leading-relaxed">{body}</p>}
    </motion.div>
  )
}
