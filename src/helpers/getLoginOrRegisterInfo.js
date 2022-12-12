export default function getInfo(info, e, field) {
  switch (field) {
  case 'name':
    info = { ...info, name: e.target.value }
    break
  case 'email':
    info = { ...info, email: e.target.value }
    break
  case 'psd':
    info = { ...info, password: e.target.value }
    break
  default:
    break
  }
  return info
}
