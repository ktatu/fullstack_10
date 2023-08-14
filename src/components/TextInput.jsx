import { TextInput as NativeTextInput, StyleSheet } from "react-native"

/*
const styles = StyleSheet.create({
    border: "solid"
})*/

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style]

    return (
        <NativeTextInput
            style={textInputStyle}
            {...props}
        />
    )
}

export default TextInput
