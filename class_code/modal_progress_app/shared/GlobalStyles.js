
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        width: '100%'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "magenta",
        padding: '2%',
        borderRadius: 5,
        width: '96%',
        margin: '2%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    headerStyle: {
        width: '100%',
        padding: 10,
        color: 'deepskyblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default globalStyles;

