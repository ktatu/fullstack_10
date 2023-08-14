import { ScrollView, View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        display: "flex",
        flexDirection: "row",
    },
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab
                    text="Repositories"
                    link="/"
                />
                <AppBarTab
                    text="Sign In"
                    link="signin"
                />
            </ScrollView>
        </View>
    )
}

export default AppBar
