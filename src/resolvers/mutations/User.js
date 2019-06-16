const UserMutations = {
  signupUser: (parent, { email, name }, context) => {
    return context.prisma.createUser({
      email,
      name,
    })
  },
}

module.exports = {UserMutations}