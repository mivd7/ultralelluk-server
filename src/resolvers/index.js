const { mutations } = require('./mutations')
const {queries} = require('./queries')

const {CalendarMutations, GigMutations, MediaMutations, PostMutations, UserMutations} = mutations

const resolvers = {
  Query: {
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
    post: (parent, { id }, context) => {
      return context.prisma.post({ id })
    },
  },
  Mutation: {
    signupUser: (parent, { email, name }, context) => {
      return context.prisma.createUser({
        email,
        name,
      })
    },
    createDraft: (parent, { title, content, published, userId }, context) => {
      console.log(title)
      return context.prisma.createPost({
        title,
        content,
        published,
        author: { connect: { id: userId } },
      })
    },
    publish: (parent, { id }, context) => {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
    deletePost: (parent, { id }, context) => {
      return context.prisma.deletePost({ id })
    },
  },
  Post: {
    author: ({ id }, args, context) => {
      return context.prisma.post({ id }).author()
    },
  },
  User: {
    posts: ({ id }, args, context) => {
      return context.prisma.user({ id }).posts()
    },
  },
}

module.exports = { resolvers }