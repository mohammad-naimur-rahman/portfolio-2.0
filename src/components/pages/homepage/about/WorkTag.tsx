import Typography from '@/components/ui/typography'

interface Props {
  children: string
}

export default function WorkTag({ children }: Props) {
  return (
    <Typography variant="h5" className="inline-block pl-2">
      {children}
    </Typography>
  )
}
