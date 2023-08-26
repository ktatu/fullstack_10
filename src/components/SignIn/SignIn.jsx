import FormikTextInput from "./FormikTextInput"
import Text from "../Text"
import { Pressable, StyleSheet, View } from "react-native"
import { Formik } from "formik"
import theme from "../../theme"
import * as yup from "yup"
import useSignIn from "../../hooks/useSignIn"

const SignInView = () => {
    const [signIn] = useSignIn()

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            padding: 10,
            paddingTop: 20,
        },
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

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
            const { data } = await signIn({ username, password })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View style={styles.container}>
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
                        <Pressable
                            onPress={handleSubmit}
                            style={styles.submitButton}
                        >
                            <Text color="white">Sign in</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignInView
