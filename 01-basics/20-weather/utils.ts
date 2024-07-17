const convertTime = (time: string): string => {
  const timeParts = time.split(':')

  const timeInMinutes = timeParts[0] * 60 + timeParts[1]

  return timeInMinutes
}

export { convertTime }
