import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from "react";
import * as Progress from 'react-native-progress'
import globalStyles from './shared/GlobalStyles';

export default function App() {

  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [progColour, setProgColour] = useState("blue");

  const progressItems = [
    {
      key: "Pie",
      component: <Progress.Pie 
                                  size={80}
                                  progress={progress}
                                  thickness={5}
                                  color = {progColour}
                                  unfilledColor="white"
                              />
    },
    {
      key: "Progress Bar",
      component: <Progress.Bar 
                                  width={350}
                                  height={20}
                                  progress={progress}
                                  thickness={5}
                                  color = {progColour}
                                  unfilledColor="white"
                                  borderRadius={10}
                              />
    }
  ]

  const progColourChange = () => {
    
  }

  const handleProgressChange = (inText) => {
    const changeValue = (inText.length/100);
    if (changeValue >= 0 && changeValue <= 1){
        if (changeValue != progress) {
          setProgress(changeValue)
          progColourChange()
        }
    }
};

  useEffect(() => {
    if (progress == 1) {
      setProgColour("red");
    } else {
      setProgColour("blue");
    }
  })

  return (
    <SafeAreaProvider>
    <SafeAreaView style={globalStyles.safeArea}>
    <View style={styles.container}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleStyle}>Lab 6 - Progress</Text>
      </View>
      <View style={styles.container}>
      <Text style={globalStyles.label}>Insert text: </Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          autoCapitalize='false'
          style = {styles.inputStyle}
          value={text}
          onChangeText={setText}
          onKeyPress={handleProgressChange(text)}
          placeholder='Insert text'
          keyboardType='text'
          maxLength={100}
        />
      </View>
      <View style={styles.container}>
        <Text style={globalStyles.label}>Progress: {(progress*100).toFixed(0)}%</Text>
        <FlatList
            data={progressItems}
            numColumns={1}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.gridItem}>
                  <Text style={styles.label}>{item.key}</Text>
                  {item.component}
              </View>
        )}>

        </FlatList>
      </View> 
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexShrink: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
    inputStyle:{
      fontSize: 12,
      borderColor: 'black',
      backgroundColor: 'aliceblue',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      height: '40%',
      width: 300,
      alignItems: "center",
    },
    gridItem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      margin: 5,
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      elevation: 3
  },
});
