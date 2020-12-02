import { declarativeWrappingPlugin, intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'

const company = objectType({
    name: 'company',
    definition(t:any) {
      t.model.id()
      t.model.name()
      t.model.age()
      t.model.address()
      t.model.salary()
      t.model.join_date()
    },
  })

  const Query = objectType({
    name: 'Query',
    definition(t:any) {
      t.crud.company()
    },
  })

  const Mutation = objectType({
    name: 'Mutation',
    definition(t:any) {
      t.crud.deleteOnecompany()
    },
  })

  export const schema = makeSchema({
    types: [ Query, Mutation, company],
    plugins: [nexusPrisma({ experimentalCRUD: true }), declarativeWrappingPlugin()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
      contextType: 'Context.Context',
      sources: [
        {
          source: '@prisma/client',
          alias: 'prisma',
        },
        {
          source: require.resolve('./context'),
          alias: 'Context',
        },
      ],
    },
  })