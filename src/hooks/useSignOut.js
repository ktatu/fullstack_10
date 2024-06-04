import { useApolloClient } from "@apollo/client"
import { useNavigate } from "react-router-native"
import useAuthStorage from "./useAuthStorage"

const useSignOut = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const navigate = useNavigate()

    const signOut = async () => {
        navigate("/")
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
    }

    return signOut
}

export default useSignOut
