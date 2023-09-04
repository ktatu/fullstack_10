import { useMutation } from "@apollo/client"
import { Formik } from "formik"
import { Pressable, StyleSheet, View } from "react-native"
import { useNavigate } from "react-router-native"
import * as yup from "yup"
import { ADD_REVIEW } from "../graphql/mutations"
import theme from "../theme"
import FormikTextInput from "./SignIn/FormikTextInput"
import Text from "./Text"

const validationSchema = yup.object().shape({
    ownerName: yup.string().required("Repository owner's name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup.number().required().min(0).max(100),
    text: yup.string(),
})

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
        padding: 10,
    },
})

const CreateReviewView = () => {
    const [addReview] = useMutation(ADD_REVIEW)
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const mutationRes = await addReview({
            variables: {
                review: {
                    ...values,
                    rating: parseInt(values.rating),
                },
            },
        })

        const repositoryId = mutationRes.data.createReview.repositoryId

        if (repositoryId) {
            navigate(`/repositories/${repositoryId}`)
        }
    }

    return (
        <View>
            <Formik
                initialValues={{ ownerName: "", repositoryName: "", text: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View style={styles.container}>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="ownerName"
                                placeholder="Repository owner name"
                            />
                        </View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="repositoryName"
                                placeholder="Repository name"
                            />
                        </View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="rating"
                                placeholder="Rating between 0 and 100"
                                inputMode="numeric"
                            />
                        </View>
                        <View style={styles.containerItem}>
                            <FormikTextInput
                                name="text"
                                placeholder="Review"
                                multiline={true}
                            />
                        </View>
                        <Pressable
                            onPress={handleSubmit}
                            style={styles.submitButton}
                        >
                            <Text
                                color="white"
                                fontWeight="bold"
                            >
                                Create a review
                            </Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default CreateReviewView
