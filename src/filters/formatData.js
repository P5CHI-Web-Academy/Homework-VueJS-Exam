export const formatData = (data) => {
  return new Date(Date.parse(data)).toLocaleDateString(
    'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )
}
