import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    reviewCount
                    stargazersCount
                    ratingAverage
                    forksCount
                    description
                    fullName
                    language
                    ownerAvatarUrl
                }
            }
        }
    }
`
