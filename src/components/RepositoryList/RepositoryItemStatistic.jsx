import { StyleSheet, View } from "react-native"
import Text from "../Text"

const RepositoryItemStatistic = ({ descriptor, statistic }) => {
    const styles = StyleSheet.create({
        containerItem: {
            display: "flex",
            alignItems: "center",
        },
    })

    if (statistic > 1000) {
        statistic = roundStatistic(statistic)
    }

    return (
        <View style={styles.containerItem}>
            <Text fontWeight="bold">{statistic}</Text>
            <Text>{descriptor}</Text>
        </View>
    )
}

const roundStatistic = (statistic) => parseFloat(Number(statistic / 1000).toFixed(1)) + "K"

export default RepositoryItemStatistic
