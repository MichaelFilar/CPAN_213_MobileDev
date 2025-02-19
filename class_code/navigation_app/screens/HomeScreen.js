import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import globalStyles from "../shared/GlobalStyles";

const HomeScreen = ( {navigation, route} ) => {

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerStyle}>Home Screen</Text>

            <Text style={globalStyles.title}>Welcome, {route.params.username} </Text>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to About Screen
                    navigation.navigate('About')
                }}
            >
                <Text style = {globalStyles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to Contact Screen without data
                    // navigation.navigate('Contacts')

                    //navigate to Contact Screen with data sent to route parameters
                    navigation.navigate(
                        'Contacts', //route name
                        {
                            country: "Canada", 
                            city: "Toronto"
                        } //data for route parameter
                    )
                }}
            >
                <Text style = {globalStyles.buttonText}>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //navigate to Tab Navigation Screen
                    navigation.navigate("TabNav")
                }}
            >
                <Text style = {globalStyles.buttonText}>Tab Navigation</Text>
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

export default HomeScreen;
