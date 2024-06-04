import { useState } from "react"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { Searchbar } from "react-native-paper"
import { useNavigate } from "react-router-native"
import { useDebounce } from "use-debounce"
import useRepositories from "../../hooks/useRepositories"
import RepositoryItem from "./RepositoryItem"
import SortMenu from "./SortMenu"

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
    },
    separator: {
        height: 10,
    },
    headerContainer: {
        padding: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({
    repositories,
    handleSort,
    searchValue,
    setSearchValue,
}) => {
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
                ListHeaderComponent={
                    <View style={styles.headerContainer}>
                        <Searchbar
                            placeholder="Filter repositories"
                            value={searchValue}
                            onChangeText={setSearchValue}
                        />
                        <SortMenu handleSort={handleSort} />
                    </View>
                }
            />
        </View>
    )
}

const RepositoryList = () => {
    const [searchValue, setSearchValue] = useState("")
    const [debouncedValue] = useDebounce(searchValue, 100)

    const [orderBy, setOrderBy] = useState("CREATED_AT")
    const [orderDirection, setOrderDirection] = useState("DESC")

    const { repositories } = useRepositories(orderBy, orderDirection, debouncedValue)

    const handleSort = (sortMethod) => {
        if (sortMethod === "Latest repositories") {
            setOrderBy("CREATED_AT")
            setOrderDirection("DESC")
        } else if (sortMethod === "Highest rated repositories") {
            setOrderBy("RATING_AVERAGE")
            setOrderDirection("DESC")
        } else if (sortMethod === "Lowest rated repositories") {
            setOrderBy("RATING_AVERAGE")
            setOrderDirection("ASC")
        }
    }

    return (
        <RepositoryListContainer
            repositories={repositories}
            handleSort={handleSort}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
    )
}

export default RepositoryList
