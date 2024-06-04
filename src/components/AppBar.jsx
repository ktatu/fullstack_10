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

    const signedIn = data && data.me

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab
                    text="Repositories"
                    link="/"
                />
                {signedIn && (
                    <AppBarTab
                        text="My reviews"
                        link="myreviews"
                    />
                )}
                <AppBarTab
                    text="Create a review"
                    link="createreview"
                />
                {!signedIn && (
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
                )}
                {signedIn && (
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
