import { TextInput as NativeTextInput, StyleSheet } from "react-native"
import theme from "../../theme"

const styles = StyleSheet.create({
    basic: {
        borderWidth: 1,
        padding: 5,
    },
    borderColor: {
        borderColor: theme.colors.textSecondary,
    },
    borderErrorColor: {
        borderColor: theme.colors.error,
    },
})

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = error
        ? [style, styles.basic, styles.borderErrorColor]
        : [style, styles.basic, styles.borderColor]

    return (
        <NativeTextInput
            style={textInputStyle}
            {...props}
        />
    )
}

export default TextInput
