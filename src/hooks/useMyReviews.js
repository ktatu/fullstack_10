import { useQuery } from "@apollo/client"
import { GET_ME } from "../graphql/queries"

const useMyReviews = () => {
    const { data, error, loading } = useQuery(GET_ME, { variables: { includeReviews: true } })

    const reviews = data ? data.me.reviews.edges.map((edge) => edge.node) : []

    return { reviews, error, loading }
}

export default useMyReviews
