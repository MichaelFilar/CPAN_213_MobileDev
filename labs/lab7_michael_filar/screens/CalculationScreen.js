import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { useState } from 'react';


const CalculateScreen = ({navigation, route}) => {

    const { quantity } = route.params
    const [total, setTotal] = useState(quantity*5.00);
    
    return(
        <View style={globalStyles.container} >
            <Text style={globalStyles.headerStyle}>Calculation Screen</Text>

            <Text style={globalStyles.title}>Quantity: {quantity} </Text>
            <Text style={globalStyles.title}>Total: ${total.toFixed(2)} </Text>
            <Button
                title='Confirm Order'
                onPress={() => {
                navigation.navigate('Billing', {total: total})
                }}
            />

        </View>
    )
}

export default CalculateScreen;