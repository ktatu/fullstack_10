import { useApolloClient, useMutation } from "@apollo/client"
import { ADD_USER } from "../graphql/mutations"

const useSignUp = () => {
    const apolloClient = useApolloClient()
    const [mutate, result] = useMutation(ADD_USER)

    const signUp = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { user: { username, password } },
        })

        if (result.error) {
            throw new Error("Sign up error")
        }

        await apolloClient.resetStore()

        return result
    }

    return [signUp, result]
}

export default useSignUp
