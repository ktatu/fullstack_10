import { useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE)

    const signIn = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        await mutate({ variables: { credentials: { username, password } } })

        //console.log("result ", result)
        //console.log("test ", result.data.authenticate.accessToken)

        return result
    }

    return [signIn, result]
}

export default useSignIn
