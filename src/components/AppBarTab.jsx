import { Pressable, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        color: "#ffffff",
    },
})

const AppBarTab = ({ text }) => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default AppBarTab
