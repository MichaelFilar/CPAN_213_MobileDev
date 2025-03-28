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
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
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
    },
    animationContainer: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      gameArea: {
        flex: 1,
        position: 'relative',
      },
      shapeContainer: {
        position: 'absolute',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
      shapeText: {
        fontSize: 50,
      },
      panContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      shapeBlock: {
        borderRadius: 10,
        fontSize: 100
      },
});

export default globalStyles;

