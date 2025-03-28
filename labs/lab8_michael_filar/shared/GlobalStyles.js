// styles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "aliceblue"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: '100%',
    backgroundColor: "aliceblue"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'indigo',
    backgroundColor: 'indigo',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerStyle: {
    width: '100%',
    padding: 10,
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  spacer: {
    flex: 1
  },
  inputStyle: {
    fontSize: 24,
    borderColor: 'black',
    backgroundColor: 'aliceblue',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 50,
    width: "50%",
    alignItems: "center",
    backgroundColor: "white"
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  standardText: {
    fontSize: 16
  },
  outputText: {
    fontSize: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  addButton: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  listItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  animationContainer: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  gameArea: {
    flex: 1,
    position: 'relative',
  },
  shapeContainer: {
    position: 'absolute',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shapeText: {
    fontSize: 100,
  },
  panContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  shapeBlock: {
    borderRadius: 10,
    fontSize: 100
  },
});

export default globalStyles;

