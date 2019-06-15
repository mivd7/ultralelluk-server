const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createUser({
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: {
      create: {
        title: 'Roses are red',
        content: 'Blablablabla...',
        published: true,
      },
    },
    contributions: 1
  })
  await prisma.createUser({
    email: 'joep.meloen@euronet.nl',
    name: 'Joep',
    posts: {
      create: [
        {
          title: 'Violets are blue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam voluptatibus atque officia debitis laudantium iure hic a aliquam laborum nam voluptatem praesentium, eligendi vel autem voluptate numquam modi suscipit.',
          published: true,
        },
        {
          title: 'I have some poems for you',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque repellendus odio architecto in, molestiae perspiciatis laudantium molestias suscipit saepe sit ducimus culpa aliquid optio porro exercitationem ratione voluptates libero!',
        },
      ],
    },
    contributions: 2
  })
}

main().catch(e => console.error(e))
