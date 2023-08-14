import { StyleSheet, View } from "react-native"

const RepositoryItemStatisticsList = ({ children }) => {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        },
    })

    return <View style={styles.container}>{children}</View>
}

export default RepositoryItemStatisticsList
