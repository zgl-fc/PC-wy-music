import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 按需加载
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(isYesterday)
dayjs.locale('zh-cn') 
dayjs.extend(isToday)
dayjs.extend(relativeTime)
export function formatTime(time) {
  const timeObj = dayjs(time)
  var now = dayjs()
  if(timeObj.isToday()) {
    if(timeObj.fromNow().indexOf('小时') == -1)
      return timeObj.fromNow()
    else 
      return timeObj.format('HH:MM')
  }
  else if(timeObj.isYesterday()) {
    return '昨天 ' + timeObj.format('HH:MM')
  }
  else if(timeObj.year() === now.year()){
    return timeObj.format('MM月DD日 hh:mm')
  }
  else {
    return timeObj.format('YYYY年MM月DD日')
  }
}