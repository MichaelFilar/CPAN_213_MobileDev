//AppStyles.js
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./Constants";

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    headerStyle: {
        width: '100%',
        padding: SIZES.padding,
        color: COLORS.titleColor,
        fontSize: SIZES.titleSize,
        margin: SIZES.margin,
        fontWeight: 'bold',
        textAlign: 'center'
      },
    board: {
        borderColor: 'black',
        borderWidth: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '40%',
        margin: 20,
        justifyContent: 'space-around',
        // padding: 10
    },
    cell: {
        width: '31%',
        height: '31%',
        margin: '1%',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "slateblue",
        backgroundColor: 'salmon'
    },
    scoreBoard: {
        backgroundColor: 'cyan',
        width: '90%',
        margin: '1%',
        marginTop: 50,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyle:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default appStyles