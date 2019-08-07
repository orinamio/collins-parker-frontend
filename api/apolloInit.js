import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getMainDefinition } from 'apollo-utilities';
import apolloLogger from 'apollo-link-logger';
import nodeFetch from 'node-fetch';
import unfetch from 'unfetch';
import ws from 'ws';

import apiConfig from './config';

let apolloClient;
const isBrowser = typeof window !== 'undefined';

const errorLink = onError(({ networkError }) => {
  // if (networkError.statusCode === 401) {
  //   isBrowser &&  [do something]
  // }
});

const authLink = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers
    }
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: apiConfig.graphqlEndpoint,
  fetch: isBrowser ? unfetch : nodeFetch
});

const wsClient = isBrowser
  ? new SubscriptionClient(apiConfig.graphqlWsEndpoint, { reconnect: true })
  : new SubscriptionClient(
      apiConfig.graphqlWsEndpoint,
      {
        reconnect: true
      },
      ws
    );

const wsLink = new WebSocketLink(wsClient);

const dataTransportLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const link = from([errorLink, apolloLogger, authLink, dataTransportLink]);

function createClient(initialState) {
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link,
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApolloClient(initialState) {
  if (!isBrowser) {
    return createClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }
  return apolloClient;
}
