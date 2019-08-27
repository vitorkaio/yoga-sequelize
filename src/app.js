require('dotenv').config()
import { GraphQLServer, PubSub } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'

const pubsub = new PubSub()
const server = new GraphQLServer({ 
  typeDefs: importSchema('./src/schema/index.graphql'),
  resolvers, 
  context: { pubsub } // context todos os resolvers tem acesso
})

const ops = {
	port: process.env.APOLLO_SERVER_PORT
}

server.start(ops, ({ port }) => console.log(`Server is running on ${port}`))
