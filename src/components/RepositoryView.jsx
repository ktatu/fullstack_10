import { FlatList, StyleSheet, Text, View } from "react-native"
import { useParams } from "react-router-native"
import useRepository from "../hooks/useRepository"
import RepositoryItem from "./RepositoryList/RepositoryItem"
import Review from "./Review"

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
    },
})

const RepositoryView = () => {
    const { repositoryId } = useParams()
    const { repository, loading } = useRepository(repositoryId)

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (repository) {
        const reviewNodes = repository ? repository.reviews.edges.map((edge) => edge.node) : []
        return (
            <View style={styles.container}>
                <FlatList
                    data={reviewNodes}
                    ListHeaderComponent={
                        <RepositoryItem
                            item={repository}
                            repositoryView={true}
                        />
                    }
                    keyExtractor={(review) => review.id}
                    renderItem={({ item }) => <Review review={item} />}
                />
            </View>
        )
    }

    return <Text>Unexpected error</Text>
}

export default RepositoryView
