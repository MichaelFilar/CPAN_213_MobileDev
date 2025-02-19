import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import globalStyles from "../shared/GlobalStyles";

const ContactScreen = ({navigation, route}) => {

    const { country, city } = route.params
    // const { country } = route.params
    // const { city } = route.params

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>Contact Screen</Text>

            <Text style={globalStyles.title}>Country : {country} </Text>
            <Text style={globalStyles.title}>City : {city} </Text>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to About Screen
                    navigation.navigate("About")
                }}
            >
                <Text style = {globalStyles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to Home screen ; also supply username route parameter
                    navigation.navigate("Home", { username: 'Jupiter'} )
                }}
            >
                <Text style = {globalStyles.buttonText}>Home</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                     //navigate to Previous screen
                     if (navigation.canGoBack()){
                        navigation.goBack()
                     }
                }}
            >
                <Text style = {globalStyles.buttonText}>Go Back</Text>
            </TouchableOpacity> 
        </View>
    )
}

export default ContactScreen;
