import { useState, type FormEvent } from 'react'
import { CalendarCheck, CheckCircle2, Loader2, XCircle } from 'lucide-react'
import { SelectInput, TextInput, TextArea } from './Field'
import Button from './Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  request: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  request: '',
}

const timeSlots = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
]

function today(): string {
  const date = new Date()
  const offset = date.getTimezoneOffset()
  return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10)
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email.'
  if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!values.date) errors.date = 'Please choose a date.'
  else if (values.date < today()) errors.date = 'Please pick a future date.'
  if (!values.time) errors.time = 'Please pick a time.'
  return errors
}

async function submitReservation(payload: FormState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1400))
  if (import.meta.env.DEV) {
    console.info('Reservation payload (mock):', payload)
  }
}

export default function ReservationForm() {
  const [values, setValues] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const setValue = (key: keyof FormState) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitReservation(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-600/20 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-12 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-5 font-serif text-2xl font-semibold text-espresso">You’re on the list.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks, {values.name.split(' ')[0]}. We’ve reserved your table for {values.guests} on {values.date} at {values.time}.
          A confirmation is on its way to {values.email}.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialForm)
            setStatus('idle')
          }}
          className="mt-6 text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
        >
          Make another reservation
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          id="res-name"
          label="Name"
          placeholder="Your full name"
          value={values.name}
          onChange={(event) => setValue('name')(event.target.value)}
          error={errors.name}
          autoComplete="name"
          required
        />
        <TextInput
          id="res-email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => setValue('email')(event.target.value)}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          id="res-phone"
          label="Phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={values.phone}
          onChange={(event) => setValue('phone')(event.target.value)}
          error={errors.phone}
          autoComplete="tel"
          required
        />
        <TextInput
          id="res-date"
          label="Date"
          type="date"
          min={today()}
          value={values.date}
          onChange={(event) => setValue('date')(event.target.value)}
          error={errors.date}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectInput
          id="res-time"
          label="Time"
          options={timeSlots.map((time) => ({ value: time, label: time }))}
          value={values.time}
          onChange={(event) => setValue('time')(event.target.value)}
          error={errors.time}
          required
        />
        <SelectInput
          id="res-guests"
          label="Guests"
          options={Array.from({ length: 8 }, (_, index) => ({
            value: String(index + 1),
            label: index === 0 ? '1 guest' : `${index + 1} guests`,
          }))}
          value={values.guests}
          onChange={(event) => setValue('guests')(event.target.value)}
        />
      </div>

      <TextArea
        id="res-request"
        label="Special Request"
        placeholder="Window seat, celebration, allergies…"
        value={values.request}
        onChange={(event) => setValue('request')(event.target.value)}
        hint="Optional"
      />

      <div className="flex flex-col gap-3 pt-1">
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full" arrow>
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Reserving…
            </>
          ) : (
            'Reserve Table'
          )}
        </Button>
        {status === 'error' && (
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-red-600" role="alert">
            <XCircle className="size-4" aria-hidden="true" />
            Something went wrong. Please try again.
          </p>
        )}
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted/80">
          <CalendarCheck className="size-3.5" aria-hidden="true" />
          No prepayment needed. Just show up and we’ll have your seat ready.
        </p>
      </div>
    </form>
  )
}
