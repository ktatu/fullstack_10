//import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"
import { Navigate, Route, Routes } from "react-router-native"
import theme from "../theme"
import AppBar from "./AppBar"
import CreateReviewView from "./CreateReviewView"
import RepositoryList from "./RepositoryList"
import RepositoryView from "./RepositoryView"
import SignInView from "./SignIn/SignIn"

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
                    path="/createreview"
                    element={<CreateReviewView />}
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
