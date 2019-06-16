const UserQueries = {  
  allUsers: (parent, args, context) => {
    return context.prisma.users()
  },
  user: (parent, { id }, context, error) => {
    return context.prisma.user({ id })
  },
}

module.exports = {UserQueries}