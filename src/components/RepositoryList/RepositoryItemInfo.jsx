import { Image, StyleSheet, View } from "react-native"
import Text from "../Text"
import RepositoryItemLanguage from "./RepositoryItemLanguage"

const RepositoryItemInfo = ({ fullName, description, language, ownerAvatarUrl }) => {
    const styles = StyleSheet.create({
        mainContainer: {
            display: "flex",
            flexDirection: "row",
        },
        logo: {
            height: 50,
            width: 50,
            marginRight: 10,
        },
        secondaryContainer: {
            display: "flex",
            flexDirection: "column",
            flexShrink: 1,
        },
        secondaryContainerItem: {
            marginBottom: 5,
        },
    })

    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.logo}
                source={{ uri: ownerAvatarUrl }}
            />
            <View style={styles.secondaryContainer}>
                <Text
                    fontWeight="bold"
                    style={styles.secondaryContainerItem}
                >
                    {fullName}
                </Text>
                <Text style={styles.secondaryContainerItem}>{description}</Text>
                <View style={styles.secondaryContainerItem}>
                    <RepositoryItemLanguage language={language} />
                </View>
            </View>
        </View>
    )
}

export default RepositoryItemInfo
