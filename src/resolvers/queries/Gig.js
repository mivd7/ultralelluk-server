const GigQueries = { 
  feedGigs: (parent, args, context) => {
    return context.prisma.gigs()
  },
  filterGigs: (parent, { searchString }, context) => {
    return context.prisma.gigs({
      where: {
        OR: [
          {
            title_contains: searchString,
          },
          {
            date_contains: searchString,
          },
        ],
      },
    })
  },
  gig: (parent, { id }, context, error) => {
    return context.prisma.gig({ id })
  },
}

module.exports = {GigQueries}