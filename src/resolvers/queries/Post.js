const PostQueries = {
  feedPosts: (parent, args, context) => {
    return context.prisma.posts({ where: { published: true } })
  },
  filterPosts: (parent, { searchString }, context) => {
    return context.prisma.posts({
      where: {
        OR: [
          {
            title_contains: searchString,
          },
          {
            content_contains: searchString,
          },
        ],
      },
    })
  },
  post: (parent, { id }, context, error) => {
    return context.prisma.post({ id })
  },
  feedDrafts: (parent, args, context) => {
    return context.prisma.posts({ where: { published: false } })
  },
}

module.exports = {PostQueries}