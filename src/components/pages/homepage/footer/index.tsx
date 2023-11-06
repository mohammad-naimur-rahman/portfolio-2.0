import Typography from '@/components/ui/typography'

export default function Footer() {
  return (
    <Typography variant="body" className="text-center pb-10">
      All right reserved © <cite>Naimur Rahman</cite> -{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}
