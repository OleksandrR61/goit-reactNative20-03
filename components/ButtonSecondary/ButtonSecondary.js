import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default ButtonSecondary = ({text, textButton, onPress}) => <View
        style={styles.container}
    >
        <Text
            style={styles.text}
        >
            {text}
        </Text>

        <TouchableOpacity
            onPress={onPress}
        >
            <Text
                style={styles.textButton}
            >
                {textButton}
            </Text>
        </TouchableOpacity>
    </View>;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",      
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        color: "#1B4371",
    },

    textButton: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        textDecorationLine: "underline",
        color: "#1B4371",
    },
})