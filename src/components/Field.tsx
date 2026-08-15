import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface BaseProps {
  label: string
  error?: string
  hint?: string
}

interface FieldProps extends BaseProps {
  id: string
  children: ReactNode
}

const fieldClasses = (hasError?: string) =>
  cn(
    'w-full rounded-xl border bg-warmwhite px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors',
    hasError
      ? 'border-red-400 focus:border-red-500 focus:outline-none'
      : 'border-ink/10 focus:border-caramel focus:outline-none',
  )

export function Field({ id, label, error, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-espresso/80">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted/80">{hint}</p>}
      {error && (
        <p className="flex items-center gap-1 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

interface TextInputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export function TextInput({ id, label, error, hint, className, ...rest }: TextInputProps) {
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <input id={id} aria-invalid={Boolean(error)} className={cn(fieldClasses(error), className)} {...rest} />
    </Field>
  )
}

interface SelectInputProps extends BaseProps, SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  options: Array<{ value: string; label: string }>
}

export function SelectInput({ id, label, error, hint, options, className, ...rest }: SelectInputProps) {
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <select id={id} aria-invalid={Boolean(error)} className={cn(fieldClasses(error), className)} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  )
}

interface TextAreaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
}

export function TextArea({ id, label, error, hint, className, ...rest }: TextAreaProps) {
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        className={cn(fieldClasses(error), 'min-h-28 resize-y', className)}
        {...rest}
      />
    </Field>
  )
}
