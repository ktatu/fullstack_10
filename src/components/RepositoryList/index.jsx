import { FlatList, View, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem"
import useRepositories from "../../hooks/useRepositories"
import { Pressable } from "react-native"
import { useNavigate } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
    },
    separator: {
        height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : []
    const navigate = useNavigate()

    return (
        <View style={styles.container}>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
                        <RepositoryItem item={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}

const RepositoryList = () => {
    const { repositories } = useRepositories()

    return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList
