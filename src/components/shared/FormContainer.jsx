import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        padding: 10,
        paddingTop: 20,
    },
})

const FormContainer = ({ children }) => {
    return <View style={styles.container}>{children}</View>
}

export default FormContainer
