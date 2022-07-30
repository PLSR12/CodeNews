const formatCurrency = (value: number | bigint) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default formatCurrency
