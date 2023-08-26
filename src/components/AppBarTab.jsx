import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

const AppBarTab = ({ text, link, handlePress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={handlePress}
        >
            <Link to={link}>
                <Text
                    fontWeight="bold"
                    color="white"
                >
                    {text}
                </Text>
            </Link>
        </Pressable>
    )
}

export default AppBarTab
