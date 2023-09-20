import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const avatar = require("../../assets/image/userExample.jpg");

export default ImputImage = ({image, onPress}) => <>
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(avatar)}
            disabled={image}
        >
            <ImageBackground
                source={image}
                style={styles.image}
            />
        </TouchableOpacity>

        <TouchableOpacity
                style={styles.button}
                onPress={() => onPress(image
                    ? null
                    : avatar
                )}
            >
                <ImageBackground
                    source={image 
                        ? require("../../assets/image/union.png")
                        : require("../../assets/image/add.png")}
                    style={image
                        ? styles.buttonImageDelete
                        : styles.buttonImageAdd
                    }
                />
        </TouchableOpacity>
    </>;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: -60,
        left: Dimensions.get("screen").width / 2 - 60,

        height: 120,
        width: 120,

        borderRadius: 16,
        overflow: "hidden",

        backgroundColor: "#F6F6F6",
    },
    image: {
        flex: 1,
    },
    button: {
        position: "absolute",
        top: 21,
        left: Dimensions.get("screen").width / 2 + 47,

        justifyContent: "center",
        alignItems: "center",

        height: 25,
        width: 25,
        backgroundColor: "#F6F6F6",

        borderRadius: 25,
        overflow: "hidden",
    },
    buttonImageAdd: {
        height: 25,
        width: 25,
    },
    buttonImageDelete: {
        height: 13,
        width: 13,
    },    
})