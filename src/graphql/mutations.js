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

export const ADD_USER = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            id
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

// eslint-disable-next-line
const USER_INPUT = gql`
    input CreateUserInput {
        password: String!
        username: String!
    }
`
