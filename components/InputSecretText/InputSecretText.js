import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


import InputText from "../InputText/InputText";

export default InputSecretText = ({
    value,
    onChangeText,
    placeholder,
    keyboardType,
    inputMode,
    style,
}) => {
    const [ isSecure, setIsSecure ] = useState(true);

    return <View
            style={{...styles.container, ...style}}
        >
            <InputText
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                inputMode={inputMode}
                secureTextEntry={isSecure}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => setIsSecure(isSecure => !isSecure)}
            >
                <Text
                    style={styles.text}
                >
                    Показати
                </Text>
            </TouchableOpacity>
        </View>
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    input: {
        paddingRight: 104,
    },
    button: {
        position: "absolute",
        
        right: 16,
        top: 16,
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18.75,
        color: "#1B4371",
    },
});