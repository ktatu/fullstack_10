import { Pressable, StyleSheet } from "react-native"
import theme from "../../theme"
import Text from "../Text"

const styles = StyleSheet.create({
    submitButton: {
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 10,
    },
})

const FormSubmitButton = ({ handleSubmit, text }) => {
    return (
        <Pressable
            onPress={handleSubmit}
            style={styles.submitButton}
        >
            <Text
                color="white"
                fontWeight="bold"
            >
                {text}
            </Text>
        </Pressable>
    )
}

export default FormSubmitButton
