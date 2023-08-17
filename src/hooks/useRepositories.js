import { GET_REPOSITORIES } from "../graphql/queries"
import { useQuery } from "@apollo/client"

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
    })

    /*
    const fetchRepositories = async () => {
        setLoading(true)

        // Replace the IP address part with your own IP address!
        const response = await fetch("http://192.168.1.33:5000/api/repositories")
        const json = await response.json()

        setLoading(false)
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])
    */

    //return { repositories, loading, refetch: fetchRepositories }
    return { data, error, loading }
}

export default useRepositories
