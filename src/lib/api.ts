import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
})

export type AppointmentRequestPayload = {
  first_name: string
  last_name: string
  phone_number: string
  appointment_date: string
  reason?: string
}

export async function submitAppointmentRequest(payload: AppointmentRequestPayload) {
  const { data } = await api.post('/public/appointments', payload)
  return data
}
