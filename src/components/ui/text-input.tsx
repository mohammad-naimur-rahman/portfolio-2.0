// TextInput.tsx
import React from 'react'

interface TextInputProps {
  label: string
  type?: 'text' | 'email'
  placeholder: string
  error?: string
  as?: 'input' | 'textarea'
  rows?: number
  name: string
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  as = 'input',
  name,
  rows = 4,
  type,
}) => {
  const isTextarea = as === 'textarea'

  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-slate-700 dark:text-slate-200 text-lg font-jost mb-2"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          className={`${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded w-full py-2 px-3 ring-2 ring-teal-700 dark:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:dark:ring-sky-500 bg-white dark:bg-secondary`}
          id={label}
          rows={rows}
          placeholder={placeholder}
          required
          name={name}
        />
      ) : (
        <input
          className={`${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded w-full py-2 px-3 ring-2 ring-teal-700 dark:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:dark:ring-sky-500 bg-white dark:bg-secondary`}
          id={label}
          type={type}
          placeholder={placeholder}
          required
          name={name}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default TextInput
