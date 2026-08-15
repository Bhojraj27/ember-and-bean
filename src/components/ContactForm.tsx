import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send, XCircle } from 'lucide-react'
import { TextArea, TextInput } from './Field'
import Button from './Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ContactState {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactState, string>>

const initialForm: ContactState = { name: '', email: '', message: '' }

function validate(values: ContactState): ContactErrors {
  const errors: ContactErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email.'
  if (values.message.trim().length < 10) errors.message = 'Tell us a little more (at least 10 characters).'
  return errors
}

async function sendMessage(payload: ContactState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  if (import.meta.env.DEV) {
    console.info('Contact message (mock):', payload)
  }
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactState>(initialForm)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const setValue = (key: keyof ContactState) => (value: string) => {
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
      await sendMessage(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-600/20 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-12 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-5 font-serif text-2xl font-semibold text-espresso">Message sent.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks for writing to us, {values.name.split(' ')[0]}. We usually reply within a day.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialForm)
            setStatus('idle')
          }}
          className="mt-6 text-sm font-medium text-caramel-dark underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          id="contact-name"
          label="Name"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => setValue('name')(event.target.value)}
          error={errors.name}
          autoComplete="name"
          required
        />
        <TextInput
          id="contact-email"
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
      <TextArea
        id="contact-message"
        label="Message"
        placeholder="Ask about events, private bookings, wholesale beans…"
        value={values.message}
        onChange={(event) => setValue('message')(event.target.value)}
        error={errors.message}
        required
      />
      <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full" arrow>
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>
      {status === 'error' && (
        <p className="flex items-center justify-center gap-2 text-sm font-medium text-red-600" role="alert">
          <XCircle className="size-4" aria-hidden="true" />
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
