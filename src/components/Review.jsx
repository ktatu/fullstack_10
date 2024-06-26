import { format } from "date-fns"
import { StyleSheet, View } from "react-native"
import theme from "../theme"
import Text from "./Text"

const Review = ({ review }) => {
    const styles = StyleSheet.create({
        reviewContainer: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
            padding: 10,
        },
        ratingContainer: {
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderWidth: 3,
            borderColor: theme.colors.primary,
            marginRight: 15,
        },
        reviewContentContainer: {
            display: "flex",
            flexShrink: 1,
        },
        reviewContentContainerItem: {
            paddingBottom: 5,
        },
    })

    const formattedDate = format(new Date(review.createdAt), "dd-MM-yyyy")

    return (
        <View style={styles.reviewContainer}>
            <View style={styles.ratingContainer}>
                <Text
                    fontWeight="bold"
                    color="primary"
                >
                    {review.rating}
                </Text>
            </View>
            <View style={styles.reviewContentContainer}>
                <Text
                    style={styles.reviewContentContainerItem}
                    fontWeight="bold"
                >
                    {review.user ? review.user.username : review.repository.fullName}
                </Text>
                <Text style={styles.reviewContentContainerItem}>{formattedDate}</Text>
                <Text style={{ flexShrink: 1 }}>{review.text}</Text>
            </View>
        </View>
    )
}

export default Review
