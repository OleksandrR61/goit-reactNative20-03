import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ButtonPrimary = ({isReady = true, title, onPress, style}) => <TouchableOpacity
            onPress={() => isReady && onPress()}
            style={{
                ...styles.container,
                backgroundColor: isReady ? "#FF6C00" : "#F6F6F6",
                ...style,
            }}
            disabled={!isReady}
        >
            <Text
                style={{
                    ...styles.title,
                    color: isReady ? "#FFFFFF" : "#BDBDBD",
                }}
            >
                {title}                
            </Text>
        </TouchableOpacity>;

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        paddingVertical: 16,

        alignItems: "center",
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,        
    }
})