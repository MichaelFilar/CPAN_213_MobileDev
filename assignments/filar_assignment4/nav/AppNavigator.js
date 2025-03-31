import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import AddParkingScreen from "../screens/AddParkingScreen.js";
import ParkingListScreen from "../screens/ParkingListScreen.js";
import ParkingDetailsScreen from "../screens/ParkingDetailsScreen.js";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditParkingScreen from "../screens/EditParkingScreen.js";

const Stack = createNativeStackNavigator();

export default StackNavComponent = () => {

    const headerOptions = ({ navigation, route }) => (
        {
            headerStyle: {
                backgroundColor: 'blue'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }
    )

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={headerOptions}>
                    <Stack.Screen component={ParkingListScreen} name='Parking List' />
                    <Stack.Screen component={ParkingDetailsScreen} name='Parking Details' />
                    <Stack.Screen component={AddParkingScreen} name='Add Parking' />
                    <Stack.Screen component={EditParkingScreen} name='Edit Parking' />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}