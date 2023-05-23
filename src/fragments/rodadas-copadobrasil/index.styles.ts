import { StyleSheet } from "react-native";
import { cores } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        padding: 8,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: cores.cinza
    },
    detalhes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    detalhesRodada: {
        display: "flex",
        alignItems: "center"
    },
});
