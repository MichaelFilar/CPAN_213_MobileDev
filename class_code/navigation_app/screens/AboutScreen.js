
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import globalStyles from "../shared/GlobalStyles";

const AboutScreen = ( {navigation} ) => {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>About Screen</Text>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to Contact Screen
                    navigation.navigate("Contacts")
                }}
            >
                <Text style = {globalStyles.buttonText}>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //removes all the other screens from stack and just leave first one
                    // effect - navigate to first screen
                    navigation.popToTop()
                }}
            >
                <Text style = {globalStyles.buttonText}>Pop To Top</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                     //removes current screen from stack
                     //effect - going back to previous screen
                     navigation.pop()
                }}
            >
                <Text style = {globalStyles.buttonText}>Pop</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                     //removes all the screens from stack until the Contacts screen
                     navigation.popTo("Contacts")
                }}
            >
                <Text style = {globalStyles.buttonText}>Pop To Contacts</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                     //navigate to Previous screen
                     navigation.goBack()
                }}
            >
                <Text style = {globalStyles.buttonText}>Go Back</Text>
            </TouchableOpacity> 
        </View>
    )
}

export default AboutScreen;
