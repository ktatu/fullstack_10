import FormikTextInput from "./FormikTextInput"
import Text from "./Text"
import { Pressable, StyleSheet, View } from "react-native"
import { Formik } from "formik"
import theme from "../theme"

const SignInView = () => {
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

    const onSubmit = () => {
        console.log("submit")
    }

    return (
        <View>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={onSubmit}
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
