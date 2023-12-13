import { Formik } from "formik"
import { StyleSheet, View } from "react-native"
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn"
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

    const onSubmit = () => {
        console.log("submit")
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
