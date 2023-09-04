import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

export const ADD_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`

// eslint-disable-next-line
const AUTHENTICATE_INPUT = gql`
    input AuthenticateInput {
        username: String!
        password: String!
    }
`
// eslint-disable-next-line
const REVIEW = gql`
    input CreateReviewInput {
        ownerName: String!
        rating: Int!
        repositoryName: String!
        text: String
    }
`
