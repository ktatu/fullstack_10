import { useQuery } from "@apollo/client"
import Constants from "expo-constants"
import { ScrollView, StyleSheet, View } from "react-native"
import { GET_ME } from "../graphql/queries"
import useSignOut from "../hooks/useSignOut"
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
    const { data } = useQuery(GET_ME)
    const signOut = useSignOut()

    const handleSignOut = async () => {
        console.log("sign out")
        await signOut()
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab
                    text="Repositories"
                    link="/"
                />
                <AppBarTab
                    text="Create a review"
                    link="createreview"
                />
                {!data || !data.me ? (
                    <>
                        <AppBarTab
                            text="Sign In"
                            link="signin"
                        />
                        <AppBarTab
                            text="Sign Up"
                            link="signup"
                        />
                    </>
                ) : (
                    <AppBarTab
                        text="Sign Out"
                        handlePress={handleSignOut}
                    />
                )}
            </ScrollView>
        </View>
    )
}
export default AppBar
