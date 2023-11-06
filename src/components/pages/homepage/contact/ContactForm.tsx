/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client'

import Button from '@/components/ui/button'
import TextInput from '@/components/ui/text-input'
import { configs } from '@/configs'
import emailjs from '@emailjs/browser'
import { FormEventHandler, RefObject, useRef } from 'react'
import toast from 'react-hot-toast'
import { GrContact } from 'react-icons/gr'

export default function ContactForm() {
  const form: RefObject<HTMLFormElement> = useRef(null)

  const sendEmail: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    toast.loading('Sending message...', { duration: 1000 })

    if (form.current) {
      emailjs
        .sendForm(
          configs.emailJs.serviceId!,
          configs.emailJs.templateId!,
          form.current,
          configs.emailJs.publicKey!
        )
        .then(
          result => {
            if (result.text === 'OK') {
              toast.success('Your message has been sent!')
            }
          },
          error => {
            toast.error(error.text)
          }
        )
    }

    form.current?.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextInput
        type="text"
        name="name"
        label="Name"
        placeholder="Enter your name"
      />
      <TextInput
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
      />
      <TextInput
        as="textarea"
        name="message"
        type="text"
        label="Message"
        placeholder="Write your message"
      />
      <Button type="submit" value="Send Message" icon={<GrContact />} />
    </form>
  )
}
