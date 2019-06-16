const PostMutations = {
  createDraft: (parent, { title, content, published, userId }, context) => {
    console.log('created: '+ title)
    return context.prisma.createPost({
      title,
      content,
      published,
      author: { connect: { id: userId } },
    })
  },
  publishPost: (parent, { id }, context) => {
    return context.prisma.updatePost({
      where: { id },
      data: { published: true },
    })
  },
  delete: (parent, { id }, context) => {
    return context.prisma.deletePost({ id })
  },
  edit: (parent, args, context) => {
    return context.prisma.updatePost({
      where: { id },
      data: {
        title: args.title,
        content: args.content,
    }})
  }
}

module.exports = {PostMutations}