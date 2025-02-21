import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { StyleSheet, 
  Text, 
  View,
  FlatList,
  Pressable,
  Alert,
  ActivityIndicator,
  Platform,
  StatusBar,
  Button
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//picker
// npm install @react-native-picker/picker
// https://www.npmjs.com/package/@react-native-picker/picker

//Dropdown
// npm install react-native-element-dropdown
// https://www.npmjs.com/package/react-native-element-dropdown

export default function App() {

  //values for barStyle property of StatusBar
  const STYLES = ['default', 'dark-content', 'light-content'];

  //values for backgroundColor property of StatusBar
  //only Android allows to change the backgroundColor of StatusBar
  const COLORS = ['#61dafb', '#ff6347', '#32cd32', '#000000', '#ffffff'];

  //values for transition property of StatusBar
  const TRANSITIONS = ['fade', 'slide', 'none'];

  const formattedStyles = STYLES.map( (item) => ( {label: item, value: item} ))
  const formattedColors = COLORS.map( (item) => ( {label: item, value: item} ))
  const formattedTransitions = TRANSITIONS.map( (item) => ( {label: item, value: item} ))

  const [hidden, setHidden] = useState(false)
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0])
  const [statusBarColor, setStatusBarColor] = useState(COLORS[0])
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0])

  //array to store movies data
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //function to retrieve movies data from API
  const getMoviesFromApi = async() => {

    //start showing ActivtiyIndicator
    setIsLoading(true)

    const url = 'https://reactnative.dev/movies.json'

    try{
      const response = await fetch(url);

      if (!response.ok){
        //unsuccessful response
        throw new Error(`Response Status : ${response.status}. 
          Response not received successfully from API.`)
      }

      //successful response
      //attempt to access JSON data from response
      const jsonData = await response.json()

      setData(jsonData.movies)

      console.log(`Response received from web servvice : 
        ${JSON.stringify(jsonData.movies)}`);
      
      return jsonData.movies;

    }catch(err){
      console.log(`Error while fetching the data from API : ${err}`);
    } finally{
      //stop showing ActivityIndicator
      setIsLoading(false)
    }
  }

  //every time component is created, fetch the movies data from API
  useEffect( () => {
    getMoviesFromApi()
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <StatusBar 
          barStyle={statusBarStyle}
          backgroundColor={statusBarColor}
          showHideTransition={statusBarTransition}
          hidden={hidden}
          animated={true}
        />

        <View style={styles.container}>
          <Text style={styles.title}>FlatList, FetchAPI, StatusBar, Picker</Text>

        {
          isLoading ? (
            <ActivityIndicator />
          ) : (
            
            <View style={ {flex: 1, width: '100%'} }>
              <FlatList 
                data={data}
                //using id as unique key for each FlatList item; id must be string
                keyExtractor={ ( {id} ) => id.toString() } 
                renderItem={ ( {item} ) => (
                  <Pressable
                    style = {styles.itemContainer}
                    onPress={ () => {
                      Alert.alert(`user selected ${item.title}`)
                    }}
                  >
                      <Text style={styles.itemText}>{item.title}</Text>
                      <Text style={styles.itemSubText}>{item.releaseYear}</Text>
                  </Pressable>
                )}
                ItemSeparatorComponent={ () => {
                  return <View style={styles.separator} />
                }}
              />
            </View>
          )
        }

        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Picker and Dropdown</Text>

          <View style={styles.horizontalContainer}>
            <Text style={styles.label}>Bar Style : </Text>

            { Platform.OS === 'android' ?
              (
                <Picker 
                  selectedValue={statusBarStyle} 
                  onValueChange={ (itemValue) => setStatusBarStyle(itemValue)}
                  style={styles.picker}
                >
                  {
                    STYLES.map( (element) => (
                      <Picker.Item label={element} value={element} key={element} />
                    ))
                  }
                </Picker>
              ) : (
                <Dropdown 
                  style={styles.dropdown}
                  data={formattedStyles}
                  labelField='label'
                  valueField='value'
                  value={statusBarStyle}
                  onChange={ (item) => {setStatusBarStyle(item.value)}}
                />
              )}
          </View>

          { Platform.OS !== 'ios' && 
              <View style={styles.horizontalContainer}>

                <Text style={styles.label}>Bar Color : </Text>
                <Dropdown 
                  style={styles.dropdown}
                  data={formattedColors}
                  labelField='label'
                  valueField='value'
                  value={statusBarColor}
                  onChange={ (item) => {setStatusBarColor(item.value)}}
                />
              </View>
          }

          <View style={styles.horizontalContainer}>

            <Text style={styles.label}>Bar Transition : </Text>
            <Dropdown 
              style={styles.dropdown}
              data={formattedTransitions}
              labelField='label'
              valueField='value'
              value={statusBarTransition}
              onChange={ (item) => {setStatusBarTransition(item.value)}}
            />

          </View>

          <Button 
            title='Toggle StatusBar Visibility'
            onPress={ () => {setHidden(!hidden)}}
          />

          <Text style={styles.label}>Bar Style : {statusBarStyle}</Text>
          <Text style={styles.label}>Bar Color : {statusBarColor}</Text>
          <Text style={styles.label}>Bar Transition : {statusBarTransition}</Text>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, //android only
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  }, 
  itemSubText: {
    fontSize: 16,
    color: '#555',
  },
  separator: {
    height: 3,
    backgroundColor: '#bdbdbd',
  },
  picker: {
    flex: 1,
    height: 50
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropdown: {
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  }
});