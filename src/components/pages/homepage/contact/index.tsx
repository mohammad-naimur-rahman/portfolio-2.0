import Typography from '@/components/ui/typography'
import Animation from './Animation'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className="py-10 md:py-16 lg:py-20" id="contact">
      <Typography variant="h1" className="font-bold text-center">
        Get In Touch
      </Typography>
      <Typography
        variant="h5"
        className="text-center py-5 font-normal font-jost"
      >
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </Typography>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full order-2 lg:order-1 lg:w-1/2">
          <ContactForm />
        </div>

        <div className="w-full max-w-md order-1 lg:order-2 lg:w-1/2">
          <Animation />
        </div>
      </div>
    </section>
  )
}
