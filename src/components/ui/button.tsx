import { cn } from '@/utils/cn'
import { FC, ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  value: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  value,
  icon,
  onClick,
  className,
  type = 'button',
}) => {
  const buttonClasses = `px-8 py-3 rounded-full flex items-center gap-2 ${
    variant === 'secondary'
      ? 'bg-slate-600 hover:bg-slate-700 transition-all text-white'
      : 'bg-teal-400 hover:bg-teal-500 transition-all text-zinc-800'
  }`

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(buttonClasses, className)}
      onClick={onClick}
    >
      {value} {icon}
    </button>
  )
}

export default Button
