import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { AuthOptions, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { UrlInfo } from "aws-appsync-subscription-link/lib/types";

const auth: AuthOptions = {
  type: "API_KEY",
  apiKey: import.meta.env.VITE_AWS_APPSYNC_API_KEY,
};
const urlInfo: UrlInfo = {
  url: import.meta.env.VITE_AWS_APPSYNC_HTTP_URL,
  region: import.meta.env.VITE_AWS_APPSYNC_REGION,
  auth,
};
const httpLink = new HttpLink({
  uri: urlInfo.url,
});

const link = ApolloLink.from([
  createAuthLink(urlInfo),
  createSubscriptionHandshakeLink({
    ...urlInfo,
    url: "wss://fejldvy3cfgpbfhklsyvp5xj5m.appsync-realtime-api.ap-northeast-1.amazonaws.com/graphql",
  }),
  httpLink,
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export { client };
