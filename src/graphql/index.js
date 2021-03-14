import { gql } from 'apollo-boost'

export const FETCH_PRODUCTS = gql`
query{
    products{
        _id
        image
        title
        availableSizes
        price
        rating
        ratingDistribution    
    }
}
`