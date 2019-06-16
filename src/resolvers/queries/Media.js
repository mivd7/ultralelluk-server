const MediaQueries = { 
  feedAllMedia: (parent, args, context) => {
    return context.prisma.media()
  },
  searchPhoto: (parent, { searchString }, context) => {
    return context.prisma.media({
      where: {
        isVideo: false,
        OR: [
          {
            caption_contains: searchString,
            
          },
          {
            date_contains: searchString,
          },
        ],
      },
    })
  },
  searchVideo: (parent, { searchString }, context) => {
    return context.prisma.media({
      where: {
        isVideo: true,
        OR: [
          {
            caption_contains: searchString,
            
          },
          {
            date_contains: searchString,
          },
        ],
      },
    })
  },
  photo: (parent, { id }, context, error) => {
    console.log(error)
    return context.prisma.media({where: { id, isVideo: false }})
  },
  video: (parent, { id }, context, error) => {
    console.log(error)
    return context.prisma.media({where: { id, isVideo: true }})
  },
}

module.exports = {MediaQueries}