import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

const AppBarTab = ({ text, link }) => {
    return (
        <Pressable style={styles.container}>
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
