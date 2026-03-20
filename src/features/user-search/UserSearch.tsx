import { useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks/useDebounce.ts'
import { Input } from '@/shared/ui/Input/Input.tsx'

interface UserSearchProps {
  onSearch: (value: string) => void
}
export const UserSearch = ({ onSearch }: UserSearchProps) => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 300)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue, onSearch])

  return (
    <Input
      placeholder="Поиск по имени, почте, группе..."
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      icon={
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      }
    />
  )
}
