import { GET_REPOSITORIES } from "../graphql/queries"
import { useQuery } from "@apollo/client"

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
    })

    const repositories = data ? data.repositories : null

    return { repositories, error, loading }
}

export default useRepositories
