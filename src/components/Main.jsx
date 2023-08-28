//import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"
import RepositoryList from "./RepositoryList"
import { Route, Routes, Navigate } from "react-router-native"
import AppBar from "./AppBar"
import theme from "../theme"
import SignInView from "./SignIn/SignIn"
import RepositoryView from "./RepositoryView"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1,
        flexShrink: 1,
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route
                    path="/"
                    element={<RepositoryList />}
                    exact
                />
                <Route
                    path="/signin"
                    element={<SignInView />}
                    exact
                />
                <Route
                    path="/repositories/:repositoryId"
                    element={<RepositoryView />}
                    exact
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/"
                            replace
                        />
                    }
                />
            </Routes>
        </View>
    )
}

export default Main
