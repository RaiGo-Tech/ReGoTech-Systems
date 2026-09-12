import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please complete the required fields.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setStatus({
        type: 'success',
        message: 'Thanks! Your message has been prepared and is ready to be sent.',
      })
      setForm(initialForm)
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="field full">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
          />
        </div>

        <div className="field full">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your goals, timeline, and what you need help with."
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>
      </div>

      {status.message && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}

      <button className="primary-button submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  )
}

export default ContactForm
