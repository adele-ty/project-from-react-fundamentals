export default function getDuration(number) {
  const hour = Math.trunc(number / 60)
  const minute = number % 60
  const hh = hour < 10 ? `0${hour}` : hour
  const mm = minute < 10 ? `0${minute}` : minute
  return ` ${hh} : ${mm} `
}
