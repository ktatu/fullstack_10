import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

const AppBarTab = ({ text }) => {
    return (
        <Pressable style={styles.container}>
            <Text
                fontWeight="bold"
                style={{ color: "white" }}
            >
                {text}
            </Text>
        </Pressable>
    )
}

export default AppBarTab
