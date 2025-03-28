import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AddBookScreen from '../screens/AddBookScreen.js'
import BookListScreen from '../screens/BookListScreen.js'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default TabNavComponent = () => {

    const tabOptions = ({route}) => (
        {
            tabBarActiveTintColor : 'blue',
            tabBarInactiveTintColor : 'gray',
            tabBarStyle: [ {display : 'flex'} ],
            tabBarIcon: ( {focused} ) => {
                let iconName = ""
                let colorName = focused ? 'blue' : 'gray'

                if (route.name === "Add Book"){
                    iconName =  'book'
                } else if (route.name === "Book List"){
                    iconName = 'collections-bookmark'
                }

                return(<MaterialIcons name={iconName} size={20} color={colorName} />)
            }
        }
    )

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabOptions}>
                <Tab.Screen component={AddBookScreen} name = 'Add Book' />
                <Tab.Screen component={BookListScreen} name = 'Book List' />
            </Tab.Navigator>
        </NavigationContainer>
    )
}