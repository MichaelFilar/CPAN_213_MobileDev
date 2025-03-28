// styles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "aliceblue"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        width: '100%',
        backgroundColor: "aliceblue"
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
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    spacer:{
        flex: 1
    },
    inputStyle:{
    fontSize: 24,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 50,
    backgroundColor: "white"
    },
    titleStyle: {
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    standardText: {
        fontSize: 16
    },
    outputText: {
        fontSize: 24
    }
});

export default globalStyles;

