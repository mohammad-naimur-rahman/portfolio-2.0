export function formatWord(input: string): string {
  if (input.length === 0) {
    return input
  }

  const firstLetter = input.charAt(0).toUpperCase()
  const restOfWord = input.slice(1)
  return firstLetter + restOfWord
}
