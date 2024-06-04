import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { IconButton, Menu } from "react-native-paper"
import Text from "../Text"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
    },
    menu: {
        paddingTop: 50,
        paddingRight: 50,
    },
})

const SortMenu = ({ handleSort }) => {
    const [visible, setVisible] = useState(false)
    const [sortMethod, setSortMethod] = useState("Latest repositories")

    const showMenu = () => setVisible(true)
    const hideMenu = () => setVisible(false)

    const handleMenuSelection = (selectedItem) => {
        hideMenu()
        setSortMethod(selectedItem)
        handleSort(selectedItem)
    }

    return (
        <View style={styles.container}>
            <Text fontSize="subheading">{sortMethod}</Text>
            <Menu
                style={styles.menu}
                visible={visible}
                anchor={
                    <IconButton
                        icon="sort"
                        size={20}
                        onPress={showMenu}
                    />
                }
                onDismiss={hideMenu}
            >
                <Menu.Item title={<Text color="textSecondary">Select an item...</Text>} />
                <Menu.Item
                    onPress={() => handleMenuSelection("Latest repositories")}
                    title="Latest repositories"
                />
                <Menu.Item
                    onPress={() => handleMenuSelection("Highest rated repositories")}
                    title="Highest rated repositories"
                />
                <Menu.Item
                    onPress={() => handleMenuSelection("Lowest rated repositories")}
                    title="Lowest rated repositories"
                />
            </Menu>
        </View>
    )
}

export default SortMenu
