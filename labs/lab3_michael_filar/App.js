import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Alert, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.6, backgroundColor: "black" }} />
      <View style={styles.container2}>
        <View style={{ flexBasis: 'auto', backgroundColor: "black" }} />
        <View style={{ flex: 4, backgroundColor: "black" }} >
          <Image source={require('./assets/tylerAlbumCover.webp')} style={{ 
                                                                            resizeMode: 'cover', 
                                                                            width: '100%', 
                                                                            height: '100%', 
                                                                            aspectRatio: 1,
                                                                            alignSelf:'center' }} />
        </View>
        <View style={{ flexBasis: 'auto', backgroundColor: "black" }} />
      </View>
      <View style={styles.timeBar}>
        <View style={styles.timer}>
          <Text style={styles.timeText}>0:00</Text>
        </View>
        <View style={{flex: 1.2, backgroundColor: 'black'}} >
        
        </View>
        <View style={styles.timer}>
          <Text style={styles.timeText}>3:33</Text>
        </View>
      </View>
      <View style={styles.songContainer} >
        <Text style={{color: 'white',
                      fontSize: 20, 
                      flexBasis: 'auto',
                      alignSelf: 'center'}}>
          Song Name
        </Text>
        <TouchableOpacity>
          <Image source={require('./assets/thumbs-up.png')} style={{ 
                                                                            resizeMode: 'contain', 
                                                                            width: '40%', 
                                                                            height: '40%', 
                                                                            aspectRatio: 1,
                                                                            alignSelf:'center',
                                                                            margin:'auto' }}/>
        </TouchableOpacity>
      </View>
      <View style={styles.playContainer} >
      <TouchableOpacity>
          <Image source={require('./assets/previousSong.png')} style={{ 
                                                                            resizeMode: 'contain', 
                                                                            width: '60%', 
                                                                            height: '60%', 
                                                                            aspectRatio: 1,
                                                                            alignSelf:'center',
                                                                            margin:'auto' }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/playButton.webp')} style={{ 
                                                                            resizeMode: 'contain', 
                                                                            width: '80%', 
                                                                            height: '80%', 
                                                                            aspectRatio: 1,
                                                                            alignSelf:'center',
                                                                            margin:'auto' }}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/nextSong.png')} style={{ 
                                                                            resizeMode: 'contain', 
                                                                            width: '60%', 
                                                                            height: '60%', 
                                                                            aspectRatio: 1,
                                                                            alignSelf:'center',
                                                                            margin:'auto' }}/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.6, backgroundColor: "black" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 'auto',
    flexGrow: 1,
    flex: 1,
    padding: 0
  },
  container2: {
    flexBasis:'auto',
    flex: 1.5,
    padding: 0,
    flexDirection: "row",
    flexWrap: 'nowrap',
  },
  timeBar: {
      
      justifyContent: 'space-around',
      alignItems: 'stretch',
      alignContent: 'space-around',
      backgroundColor:'black',
      flex:0.2,
      flexDirection: "row",
  },
  timer: {
    flex:1,
    flexBasis: 'auto',
    flexGrow: 1,
    margin: 'auto',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    alignContent: 'space-around',
  },  
  timeText: {
    flexBasis: 'auto',
    padding: '10px',
    color: 'lightgrey',
    alignSelf: 'center',
  },
  playContainer: { 
    flex: 0.6, 
    backgroundColor: "grey",
    justifyContent: 'space-around',
      alignItems: 'stretch',
      alignContent: 'space-around',
      backgroundColor:'black',
      flexDirection: "row",
  }, 
  songContainer: {
    flex: 0.6,
    justifyContent: 'space-around',
      alignItems: 'stretch',
      alignContent: 'space-around',
      backgroundColor:'black',
      flexDirection: "row",
  }
});
