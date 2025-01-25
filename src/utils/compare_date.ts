function isExpired(date: string): boolean {
  const inputDate = new Date(date)

  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  if (inputDate < currentDate) {
    return true
  } else if (inputDate > currentDate) {
    return false
  } else {
    return false
  }
}

export default isExpired
