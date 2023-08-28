import { GET_REPOSITORY } from "../graphql/queries"
import { useQuery } from "@apollo/client"

const useRepository = (id) => {
    console.log("id ", id)
    const { data, error, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { id },
    })

    const repository = data ? data.repository : null

    return { repository, error, loading }
}

export default useRepository
