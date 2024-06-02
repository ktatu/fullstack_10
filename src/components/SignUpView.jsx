import { Formik } from "formik"
import { StyleSheet, View } from "react-native"
import { useNavigate } from "react-router-native"
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn"
import useSignUp from "../hooks/useSignUp"
import FormikTextInput from "./SignIn/FormikTextInput"
import FormContainer from "./shared/FormContainer"
import FormSubmitButton from "./shared/FormSubmitButton"

const validationSchema = yup.object().shape({
    username: yup.string().min(5).max(30).required("Username is required"),
    password: yup.string().min(5).max(50).required("Password is required"),
    confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Confirmation must match the password")
        .required("Password confirmation is required"),
})

const styles = StyleSheet.create({
    containerItem: {
        marginBottom: 10,
    },
})

const SignUpView = () => {
    const [signIn] = useSignIn()
    const [signUp] = useSignUp()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
            const res = await signUp(values)
            console.log("sign up res: ", res)
        } catch (e) {
            console.log("Sign up error: ", e)
        }

        try {
            await signIn({ username, password })
            navigate("/")
        } catch (e) {
            console.log("Unable to sign in: " + e)
        }
    }

    return (
        <FormContainer>
            <Formik
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={{ username: "", password: "", confirmation: "" }}
            >
                {({ handleSubmit }) => (
                    <View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="username"
                                placeholder="Username"
                            />
                        </View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="password"
                                placeholder="Password"
                            />
                        </View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="confirmation"
                                placeholder="Password confirmation"
                            />
                        </View>
                        <FormSubmitButton
                            text="Sign up"
                            handleSubmit={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </FormContainer>
    )
}

export default SignUpView
