import { Pressable, StyleSheet, View } from "react-native"
import { Link } from "react-router-native"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
})

const AppBarTab = ({ text, link, handlePress }) => {
    if (link) {
        return (
            <View style={styles.container}>
                <Link to={link}>
                    <Text style={styles.text}>{text}</Text>
                </Link>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Pressable
                onPress={handlePress}
                style={styles.text}
            >
                <Text
                    fontWeight="bold"
                    color="white"
                >
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default AppBarTab
