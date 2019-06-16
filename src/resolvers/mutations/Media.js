const MediaMutations = {
  createMedia: (parent, { url, caption, gigId, isVideo }, context) => {
    console.log('created: '+ title)
    return context.prisma.createMedia({
      url,
      caption,
      gigId,
      isVideo,
      event: { connect: { id: gigId } },
    })
  },
  delete: (parent, { id }, context) => {
    return context.prisma.deleteMedia({ id })
  },
  edit: (parent, args, context) => {
    return context.prisma.updateMedia({
      where: args.id,
      data: {
        url: args.url,
        caption: args.caption,
    }})
  }
}

module.exports = {MediaMutations}