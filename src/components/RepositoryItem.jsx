import { StyleSheet, View } from "react-native"
import RepositoryItemInfo from "./RepositoryItemInfo"
import RepositoryItemStatistic from "./RepositoryItemStatistic"
import RepositoryItemStatisticsList from "./RepositoryItemStatisticsList"

const RepositoryItem = (props) => {
    const item = props.item

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
        },
    })

    return (
        <View style={styles.container}>
            <RepositoryItemInfo
                description={item.description}
                fullName={item.fullName}
                language={item.language}
                ownerAvatarUrl={item.ownerAvatarUrl}
            />
            <RepositoryItemStatisticsList>
                <RepositoryItemStatistic
                    descriptor="Stars"
                    statistic={item.stargazersCount}
                />
                <RepositoryItemStatistic
                    descriptor="Forks"
                    statistic={item.forksCount}
                />
                <RepositoryItemStatistic
                    descriptor="Reviews"
                    statistic={item.reviewCount}
                />
                <RepositoryItemStatistic
                    descriptor="Rating"
                    statistic={item.ratingAverage}
                />
            </RepositoryItemStatisticsList>
        </View>
    )
}

export default RepositoryItem

/*
        <View>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
*/
