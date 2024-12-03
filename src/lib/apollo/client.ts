import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
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

const link = ApolloLink.from([
  createAuthLink(urlInfo),
  createSubscriptionHandshakeLink(urlInfo),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export { client };
