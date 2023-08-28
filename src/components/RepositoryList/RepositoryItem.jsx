import { Pressable, StyleSheet, View } from "react-native"
import RepositoryItemInfo from "./RepositoryItemInfo"
import RepositoryItemStatistic from "./RepositoryItemStatistic"
import RepositoryItemStatisticsList from "./RepositoryItemStatisticsList"
import theme from "../../theme"
import Text from "../Text"
import { openURL } from "expo-linking"

const RepositoryItem = (props) => {
    const item = props.item

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
        },
        repositoryLinkButton: {
            alignSelf: "center",
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            padding: 10,
            marginBottom: 5,
            marginTop: 10,
            width: "100%",
        },
    })

    return (
        <View
            testID="repositoryItem"
            style={styles.container}
        >
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
            <View style={styles.repositoryLinkButton}>
                <Pressable onPress={() => openURL(item.url)}>
                    <Text
                        color="white"
                        fontWeight="bold"
                        style={{ alignSelf: "center" }}
                    >
                        Open in GitHub
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RepositoryItem
