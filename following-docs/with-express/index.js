'use strict'

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = { hello: () => 'Hello World' }
const app = express()
const PORT = process.env.PORT || 3000

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: process.env.NODE_ENV !== 'production'
}))

app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`))
