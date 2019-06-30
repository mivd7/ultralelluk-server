const { mutations } = require('./mutations')
const {queries} = require('./queries')
    
const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

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
    signup: async (parent, { name, email, password }, context) => {
      const hashedPassword = await hash(password, 10)
      const user = await context.prisma.createUser({
        name,
        email,
        password: hashedPassword,
      })
      return {
        token: sign({ userId: user.id }, APP_SECRET),
        user,
      }
    },
    login: async (parent, { email, password }, context) => {
      const user = await context.prisma.user({ email })
      if (!user) {
        throw new Error(`No user found for email: ${email}`)
      }
      const passwordValid = await compare(password, user.password)
      if (!passwordValid) {
        throw new Error('Invalid password')
      }
      return {
        token: sign({ userId: user.id }, APP_SECRET),
        user,
      }
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