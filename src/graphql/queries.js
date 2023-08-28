import { gql } from "@apollo/client"
import { REPOSITORY_FIELDS } from "./fragments"

export const GET_REPOSITORIES = gql`
    ${REPOSITORY_FIELDS}
    query {
        repositories {
            edges {
                node {
                    ...RepositoryFields
                }
            }
        }
    }
`
export const GET_REPOSITORY = gql`
    ${REPOSITORY_FIELDS}
    query repository($id: ID!) {
        repository(id: $id) {
            ...RepositoryFields
        }
    }
`

export const GET_ME = gql`
    query {
        me {
            username
        }
    }
`
