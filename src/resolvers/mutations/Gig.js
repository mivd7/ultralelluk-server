const GigMutations = {
  newGig: (parent, args, context) => {
    console.log('created: ' + title)
    return context.prisma.createGig({
      date: args.date,
      time: args.time,
      title: args.title,
    })
  },

  publishGig: (parent, { id }, context) => {
    return context.prisma.updateGig({
      where: { id },
      data: { published: true },
    })
  },
  delete: (parent, { id }, context) => {
    return context.prisma.deleteGig({ id })
  },
  edit: (parent, args, context) => {
    return context.prisma.updateGig({
      where: args.id,
      data: {
        title: args.title,
        date: args.date,
        time: args.time,
        confirmed: args.confirmed,
        done: args.done,
    }})
  },
  attend: (parent, {id, userId}, context) => {
    return context.prisma.updateGig({
      where: {id},
      data: {
        participants: {create: {userId}}}
    })
  }
}

module.exports = {GigMutations}