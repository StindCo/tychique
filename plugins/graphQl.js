import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl9mj91ih4f1m01uphmejbv3w/master"
);

export const hygraphClient = hygraph;

const QUERY = gql`
  {
    restaurants {
      id
      name
      rating
      address
      lat
      long
      image {
        id
        url
      }
      shortDescription
    }
  }
`;

export async function getStaticProps() {
  hygraph
    .request(QUERY)
    .then((data) => console.log(data))
    .catch((error) => console.log(error.response));
}
