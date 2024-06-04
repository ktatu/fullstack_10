import { gql } from "@apollo/client"
import { REPOSITORY_FIELDS } from "./fragments"

export const GET_REPOSITORIES = gql`
    ${REPOSITORY_FIELDS}
    query repositories(
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
        $searchKeyword: String
    ) {
        repositories(
            orderDirection: $orderDirection
            orderBy: $orderBy
            searchKeyword: $searchKeyword
        ) {
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
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
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
