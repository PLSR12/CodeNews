const formatDate = (date: string | number | Date) => {
  return new Date(date).toLocaleString('pt-Br', {
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default formatDate
