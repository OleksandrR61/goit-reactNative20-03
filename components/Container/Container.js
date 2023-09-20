import { ImageBackground, StyleSheet } from "react-native";

import photoBG from "../../assets/image/photoBG.jpg";

export default Container = ({children}) =>    <ImageBackground
        source={photoBG}
        style={styles.container}
    >
        {children}
    </ImageBackground>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
});