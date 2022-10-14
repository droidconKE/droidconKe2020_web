import moment from 'moment'
export default ({ app }, inject) => {
  inject('humanReadable', (value) => {
    return moment(value).format('MMM Do YY')
  })
  inject('timeAm', (value) => {
    return moment(value).format('a')
  })
  inject('timeDay', (value) => {
    return moment(value).format('DD')
  })
  inject('time', (value) => {
    return moment(value).format('h:mm')
  })
  inject('hour', (value) => {
    return moment(value).format('h:mm a')
  })
  inject('truncateString', (str, num) => {
    if(!str) return ''
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  })
}
