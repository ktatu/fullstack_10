import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const [mutate, result] = useMutation(AUTHENTICATE)

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } },
        })

        if (result.error) {
            throw new Error("Authentication error")
        }

        await authStorage.setAccessToken(data.authenticate.accessToken)
        await apolloClient.resetStore()

        return result
    }

    return [signIn, result]
}

export default useSignIn
