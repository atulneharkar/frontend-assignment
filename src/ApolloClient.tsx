import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getJwtToken } from "./helpers/userHelper";

const httpLink = createHttpLink({
  uri: "https://app-strapibackend-materiallibrary-dev-sea.azurewebsites.net/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = getJwtToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      user {
        username
        email
        id
      }
      jwt
    }
  }
`;

export const GET_HOME_PAGE_DATA = gql`
  query GetHomePageData {
    homePage {
      data {
        attributes {
          PageTitle
          PageDescription
          PageSections {
            __typename
            ... on ComponentPageSectionPageSection {
              id
              SectionTitle
              Cards {
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Title
                Body
              }
            }
          }
        }
      }
    }
  }
`;
