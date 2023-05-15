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
    imagemLogo: {
        width: 150,
        height: 150
    },
    areaBotoes: {
        width: "100%",
        marginTop: 30
    },
    botao: {
        marginTop: 5
    }

});


