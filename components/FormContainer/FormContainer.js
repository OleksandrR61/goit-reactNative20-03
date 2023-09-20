import { View, Text, StyleSheet } from "react-native";

export default FormContainer = ({children, title, style}) => <View
        style={{
            ...styles.container,
            ...style,
        }}
    >
        <Text
            style={styles.title}
        >
            {title}
        </Text>

        {children}
    </View>;

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
        paddingBottom: 45,

        backgroundColor: "#FFFFFF",
    },
    title: {
        marginBottom: 32,
        
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35.16,
        letterSpacing: 0.01,
        alignSelf: "center",
        color: "#212121",
    }
});