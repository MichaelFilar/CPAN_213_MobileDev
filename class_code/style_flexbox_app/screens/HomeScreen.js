import {View, Text} from 'react-native'
import appStyles from '../shared/AppStyles'

const HomeScreen = () => {
    return(
        <View style={appStyles.container}>
            <Text style={appStyles.headerStyle}>Home Screen</Text>
        </View>
    )
}

export default HomeScreen