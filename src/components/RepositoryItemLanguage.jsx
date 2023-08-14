import { StyleSheet, View } from "react-native"
import Text from "./Text"
import theme from "../theme"

const RepositoryItemLanguage = ({ language }) => {
    const styles = StyleSheet.create({
        container: {
            alignSelf: "flex-start",
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            padding: 5,
        },
    })

    return (
        <View style={styles.container}>
            <Text color="white">{language}</Text>
        </View>
    )
}

export default RepositoryItemLanguage
