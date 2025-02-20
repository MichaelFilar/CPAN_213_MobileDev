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
        width: '100%',
        backgroundColor: "lightblue",
        
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
        borderColor: 'aliceblue',
        backgroundColor: '#222',
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
        color: 'darkblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    spacer:{
        flex: 1
    },
    titleStyle: {
      fontSize: 32,
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    inputStyle:{
      fontSize: 24,
      borderColor: 'black',
      backgroundColor: 'aliceblue',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      height: 50,
      width: "50%",
      alignItems: "center",
    },
    picker: {
      flex: 1,
      height: 50,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
    },
    dropdown: {
      height: 50,
      flex: 1,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    horizontalContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    }, label: {
        fontSize: 25
    }
});

export default globalStyles;

