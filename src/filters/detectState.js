export const detectState = (state) => {
  return (state === 'open' || state === 'all' ? 'badge-success' : 'badge-danger')
}
