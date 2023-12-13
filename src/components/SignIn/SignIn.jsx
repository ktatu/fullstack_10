import { Formik } from "formik"
import { StyleSheet, View } from "react-native"
import { useNavigate } from "react-router-native"
import * as yup from "yup"
import useSignIn from "../../hooks/useSignIn"
import theme from "../../theme"
import FormContainer from "../shared/FormContainer"
import FormSubmitButton from "../shared/FormSubmitButton"
import FormikTextInput from "./FormikTextInput"

const SignInView = () => {
    const [signIn] = useSignIn()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
            const { data } = await signIn({ username, password })
            if (data) {
                navigate("/")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return <SignInViewContainer onSubmit={onSubmit} />
}

export const SignInViewContainer = ({ onSubmit }) => {
    const styles = StyleSheet.create({
        containerItem: {
            marginBottom: 10,
        },
        submitButton: {
            alignItems: "center",
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            padding: 5,
        },
    })

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(3, "Minimum length of username is 3")
            .max(25, "Maximum length of username is 25")
            .required("Username is required"),

        password: yup
            .string()
            .min(3, "Minimum length of password is 3")
            .max(25, "Maximum length of password is 25")
            .required("Password is required"),
    })

    return (
        <FormContainer>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
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
                                secureTextEntry
                            />
                        </View>
                        <FormSubmitButton
                            handleSubmit={handleSubmit}
                            text="Sign in"
                        />
                    </View>
                )}
            </Formik>
        </FormContainer>
    )
}

export default SignInView
