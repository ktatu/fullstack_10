import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES2 } from "../graphql/queries"

const useRepositories = (orderBy, orderDirection) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES2, {
        fetchPolicy: "cache-and-network",
        variables: {
            orderBy,
            orderDirection,
        },
    })

    const repositories = data ? data.repositories : null

    return { repositories, error, loading }
}

export default useRepositories
