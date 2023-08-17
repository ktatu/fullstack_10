import { gql } from "@apollo/client"

export const REPOSITORY_LIST_FIELDS = gql`
    fragment RepositoryListFields on Repository {
        id
        reviewCount
        stargazersCount
        ratingAverage
        forksCount
        description
        fullName
        language
        ownerAvatarUrl
    }
`
