import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { useState } from 'react';

const BillScreen = ({navigation, route}) => {

    const { total } = route.params
    const [final, setFinal] = useState(total*1.13);

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>Billing Screen</Text>
            <Text style={globalStyles.title}>Total: ${total.toFixed(2)} </Text>
            <Text style={globalStyles.title}>Tax: ${(total*0.13).toFixed(2)} </Text>
            <Text style={globalStyles.title}>Final Bill: ${final.toFixed(2)} </Text>

        </View>
    )
}

export default BillScreen;