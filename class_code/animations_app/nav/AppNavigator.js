import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AnimationExample from '../screens/AnimationExample'
import PanExample from '../screens/PanExample'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default TabNavComponent = () => {

    const tabOptions = ({route}) => (
        {
            tabBarActiveTintColor : 'tomato',
            tabBarInactiveTintColor : 'gray',
            tabBarStyle: [ {display : 'flex'} ],
            tabBarIcon: ( {focused} ) => {
                let iconName = ""
                let colorName = focused ? 'tomato' : 'gray'

                if (route.name === "Animation"){
                    iconName =  'ac-unit'
                }else if (route.name === "Pan"){
                    iconName = 'touch-app'
                }

                return(<MaterialIcons name={iconName} size={20} color={colorName} />)
            }
        }
    )

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabOptions}>
                <Tab.Screen component={AnimationExample} name = 'Animation' />
                <Tab.Screen component={PanExample} name = 'Pan' />
            </Tab.Navigator>
        </NavigationContainer>
    )
}