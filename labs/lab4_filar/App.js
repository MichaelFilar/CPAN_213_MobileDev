import { Picker } from '@react-native-picker/picker';
import { use, useEffect, useState } from 'react';
import { StyleSheet, 
  Text, 
  View,
  FlatList,
  Pressable,
  Alert,
  ActivityIndicator,
  Platform,
  StatusBar,
  Button,
  Image
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function App() {
  
  const JOBS = ['dev', 'business', 'hr'];

  const formattedJobs = JOBS.map( (item) => ( {label: item, value: item} ))

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [jobCategory, setJobCategory] = useState("")
  

  const getJobs = async() => {

    
      const url = 'https://jobicy.com/api/v2/remote-jobs?count=20&industry='.concat(jobCategory);
    

    

    
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

      setData(jsonData.jobs)

      console.log(`Response received from web servvice : 
        ${JSON.stringify(jsonData.jobs)}`);
      
      return jsonData.jobs;
    } catch(err){
      console.log(`Error while fetching the data from API : ${err}`);
    } finally{
      //stop showing ActivityIndicator
      setIsLoading(false)
    }
    
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
            data = {data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={{flex: 1,
                             flexDirection: 'row', alignSelf: 'stretch', alignItems: 'stretch', justifyContent: 'space-evenly'}}>
                  <View style={{flex: 1}}>
                    <Text styles={styles.itemText}>
                      {item.jobTitle} {"\n"} {item.companyName} {"\n"} {item.jobType?.[0]} {"\n"} Job Level: {item.jobLevel}
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems}}>
                    <Image 
                      source = {{uri: item.companyLogo}}
                      style={{width: '50%', height: '100%'}}
                    />
                  </View>
                </View>
              </View>
            )}
          ItemSeparatorComponent={
            () =>{
              return(
                <View style={styles.separator}></View>
              )
            }
          }
          />
        )}
        </View>
        <View style={styles.searchContainer}>
        <Text style={styles.label}>Industry Search</Text>
          <View style={styles.horizontalContainer}>
          { Platform.OS === 'android' ?
              (
                <Picker 
                  selectedValue={jobCategory} 
                  onValueChange={ (value) => setJobCategory(value)}
                  style={styles.picker}
                >
                  {
                    JOBS.map( (element) => (
                      <Picker.Item label={element} value={element} key={element} />
                    ))
                  }
                </Picker>
              ) : (
                <Dropdown 
                  style={styles.dropdown}
                  data={formattedJobs}
                  labelField='label'
                  valueField='value'
                  value={jobCategory}
                  onChange={ (item) => {setJobCategory(item.value)}}
                />
              )}
          </View>
          <Button title="Search" onPress={getJobs}></Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 0.3,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5'
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
  picker: {
    flex: 1,
    height: 50
  },
  separator: {
    height: 3,
    backgroundColor: '#bdbdbd',
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
  horizontalContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  }
});
