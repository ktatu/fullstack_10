import { gql } from "@apollo/client"
import { REPOSITORY_LIST_FIELDS } from "./fragments"

export const GET_REPOSITORIES = gql`
    ${REPOSITORY_LIST_FIELDS}
    query {
        repositories {
            edges {
                node {
                    ...RepositoryListFields
                }
            }
        }
    }
`
