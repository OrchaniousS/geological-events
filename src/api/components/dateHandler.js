export const dateHandlerToday = {
    todayDayOfMonth: new Date().getDate(),
    todayMonth: new Date().getMonth() + 1,
    todayYear: new Date().getFullYear(),
  }
  
export const dateHandlerNextDay = {
    nextDay: new Date(Date.now() + 86400000).getDate(),
    nextMonth: new Date(Date.now() + 86400000).getMonth() + 1,
    nextYear: new Date(Date.now() + 86400000).getFullYear(),
  }