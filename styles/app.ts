
// !Packages
import { StyleSheet } from "react-native"

export const app = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%"
    },
    layerBase: {
        width: "100%",
        height: 850,
        zIndex: 1
    },
    layerMiddle: {
        width: "100%",
        height: 800
    },
    layerFirefly: {
        width: 200,
        height: 500
    }
})