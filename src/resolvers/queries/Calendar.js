const CalendarQueries = {
  feedCalendar: (parent, args, context) => {
    return context.prisma.calendarItem()
  },
  feedCalendarItem: (parent, {id}, context) => {
    return context.prisma.calendarItem({id})
  },
  searchCalendarItem: (parent, { searchString }, context) => {
    return context.prisma.calendar({
      where: {
        OR: [
          {
            description_contains: searchString,
          },
          {
            date_contains: searchString,
          },
        ],
      },
    })
  },
}

module.exports = {CalendarQueries}