import useAuthStorage from "./useAuthStorage"
import { useApolloClient } from "@apollo/client"

const useSignOut = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signOut = async () => {
        console.log("---")
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
        console.log("+++")
    }

    return signOut
}

export default useSignOut
