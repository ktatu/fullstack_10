import { Text, View } from "react-native"
import { useParams } from "react-router-native"
import useRepository from "../hooks/useRepository"
import RepositoryItem from "./RepositoryList/RepositoryItem"

const RepositoryView = () => {
    const { repositoryId } = useParams()
    const { repository, loading } = useRepository(repositoryId)

    if (loading) {
        return <Text>Loading...</Text>
    }

    return (
        <View>
            <RepositoryItem
                item={repository}
                repositoryView={true}
            />
        </View>
    )
}

export default RepositoryView
