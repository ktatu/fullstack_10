import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem"
import useRepositories from "../../hooks/useRepositories"

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositories } = useRepositories()

    const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : []

    return (
        <View>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RepositoryItem item={item} />}
            />
        </View>
    )
}

export default RepositoryList