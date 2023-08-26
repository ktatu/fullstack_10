import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
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
