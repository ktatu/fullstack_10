import { FlatList, StyleSheet, View } from "react-native"
import useMyReviews from "../hooks/useMyReviews"
import Review from "./Review"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
    },
})

const MyReviews = () => {
    const { reviews, loading } = useMyReviews()

    if (loading) {
        return <Text>loading...</Text>
    }

    if (reviews) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={reviews}
                    keyExtractor={(review) => review.id}
                    renderItem={({ item }) => <Review review={item} />}
                />
            </View>
        )
    }

    return <Text>Unexpected error</Text>
}

export default MyReviews
