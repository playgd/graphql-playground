'use strict'

const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = { hello: () => 'Hello GraphQL' }

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response)
})
