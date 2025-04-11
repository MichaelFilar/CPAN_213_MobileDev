import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome'
import SummaryScreen from "./SummaryScreen";
import SavedJokesScreen from "./SavedJokesScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./LogInScreen";

const Tab = createBottomTabNavigator();
export default TabNavComponent = () => {

    const tabOptions = ({route}) => (
        {
            tabBarActiveTintColor : 'indigo',
            tabBarInactiveTintColor : 'gray',
            tabBarStyle: [ {display : 'flex'} ],
            tabBarIcon: ( {focused} ) => {
                let iconName = ""
                let colorName = focused ? 'indigo' : 'gray'

                if (route.name === "Profile"){
                    iconName = focused ? 'user' : 'user-o'
                }else if (route.name === "Home"){
                    iconName = 'home'
                }

                return(
                    <Icon name={iconName} size = {25} color={colorName}/>
                )

            }
        }
    )

    return(
        // Use NavigationContainer only if you do not have from previous navigations

        //for example: if you are presenting Bottom Tabs as your first screen; 
        // you must use NavigationContainer
        //  <NavigationContainer>
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen component={HomeScreen} name = 'Home' />
            <Tab.Screen component={SummaryScreen} name = 'Profile' />
        </Tab.Navigator>

    )
}