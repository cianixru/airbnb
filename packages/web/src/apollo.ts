import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { createUploadLink } from 'apollo-upload-client'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = createUploadLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.REACT_APP_SERVER_URL}`
      : `http://${process.env.REACT_APP_SERVER_URL}`,
  credentials: 'include'
})

const wsLink = new WebSocketLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? `wss://${process.env.REACT_APP_SERVER_URL}`
      : `ws://${process.env.REACT_APP_SERVER_URL}`,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as any
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
