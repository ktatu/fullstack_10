import { gql } from "@apollo/client"

export const REPOSITORY_FIELDS = gql`
    fragment RepositoryFields on Repository {
        id
        reviewCount
        stargazersCount
        ratingAverage
        forksCount
        description
        fullName
        language
        ownerAvatarUrl
        url
    }
`
