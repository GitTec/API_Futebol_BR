import { StyleSheet } from "react-native";
import { cores } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        padding: 8,
        alignItems: "center",
        width: "100%",
        height: 70,
        borderRadius: 7,
        margin: 5,
        backgroundColor: cores.verde
    },
    placar:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: 'space-between'
    }
    
});
