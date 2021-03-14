import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        hello: String!
        products: [productOutput]
    }

    type Mutation {
        createProduct(data: createProductInput!): productOutput
    }

    input createProductInput {
        image: String!
        title: String!
        description: String!
        availableSizes: [String!]
        price: Float!
        rating: Float!
        ratingDistribution: [Float!]
    }

    type productOutput {
        _id: ID!
        image: String!
        title: String!
        description: String!
        availableSizes: [String!]
        price: Float!
        rating: Float!
        ratingDistribution: [Float!]
    }
`;

export default typeDefs;