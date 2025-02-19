// styles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'indigo',
        backgroundColor: 'indigo',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
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
    spacer:{
        flex: 1
    }
});

export default globalStyles;

