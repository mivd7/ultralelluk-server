const CalendarMutations = {
  createDate: (parent, args, context) => {
    console.log('created: '+ title)
    return context.prisma.createCalendarItem({
      date: args.date,
      time: args.time,
      description: args.description,
      gig: args.gigId || null,
    })
  },
  delete: (parent, { id }, context) => {
    return context.prisma.deleteCalendarItem({ id })
  },
  edit: (parent, args, context) => {
    return context.prisma.updateCalendarItem({
      where: args.id,
      data: {
        date: args.date,
        time: args.time, 
        description: args.description,
    }})
  }
}

module.exports = {CalendarMutations}