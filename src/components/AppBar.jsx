import { ScrollView, View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"
import { useQuery } from "@apollo/client"
import { GET_ME } from "../graphql/queries"
import useSignOut from "../hooks/useSignOut"
import { useEffect } from "react"

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
        await signOut()
    }

    useEffect(() => {
        console.log("get me data ", data)
    }, [data])

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab
                    text="Repositories"
                    link="/"
                />
                {!data.me && (
                    <AppBarTab
                        text="Sign In"
                        link="signin"
                    />
                )}
                {data.me && (
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
