import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLSchema,
  graphql
} from 'graphql'

const Query = new GraphQLObjectType({
  name: 'RootQueries',
  fields: () => ({
    echo: {
      type: GraphQLString,
      args: {
        message: { type: GraphQLString }
      },
      resolve (rootValue, args) {
        return `received ${args.message}`
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query
})

const query = `
  query getEcho ($inputMessage: String!){
    receivedMessage: echo(message: $inputMessage)
  }
`
// console.log(graphql.toString())

graphql(Schema, query, null, null, { inputMessage: 'Hey' }).then((result) => {
  console.log(result)
})
