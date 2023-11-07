const api = process.env.NEXT_PUBLIC_MEDIUM_API
const link = process.env.NEXT_PUBLIC_MEDIUM_LINK

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const resumeId = process.env.NEXT_PUBLIC_RESUME_ID

export const configs = {
  medium: {
    api,
    link,
  },
  emailJs: {
    serviceId,
    templateId,
    publicKey,
  },
  resumeId,
}
