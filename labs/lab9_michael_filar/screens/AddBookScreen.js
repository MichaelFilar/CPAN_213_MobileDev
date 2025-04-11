<<<<<<< HEAD
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const AddBookScreen = ({ navigation, route }) => {

    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");

    const dispatch = useDispatch();


    const handleBookAdd = () => {
            const book = {
                bookName: bookName,
                author: author
            };
    
            dispatch(addBook(book));
        }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.safeArea}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.headerStyle}>Add a Book to your book list!</Text>
                        <View style={globalStyles.container}>
                            <Text style={styles.greeting}>Hello!</Text>
                            
                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={bookName}
                                onChangeText={setBookName}
                                placeholder='Title'
                                keyboardType='text'
                                maxLength={30}
                            />

                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={author}
                                onChangeText={setAuthor}
                                placeholder='Author'
                                keyboardType='text'
                                maxLength={30}
                            />

                            <Button 
                                style = {globalStyles.button}
                                title="Add book to your book list"
                                onPress={() => {handleBookAdd()}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 25,
        fontWeight: "bold",
    },
    info: {
        fontSize: 20,
        textAlign: "center",
    },
    idText: {
        fontSize: 12,
    }
})

=======
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Alert, ScrollView } from "react-native"
import globalStyles from "../shared/GlobalStyles";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const AddBookScreen = ({ navigation, route }) => {

    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");

    const dispatch = useDispatch();


    const handleBookAdd = () => {
            const book = {
                bookName: bookName,
                author: author
            };
    
            dispatch(addBook(book));
        }


    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.safeArea}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.headerStyle}>Add a Book to your book list!</Text>
                        <View style={globalStyles.container}>
                            <Text style={styles.greeting}>Hello!</Text>
                            
                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={bookName}
                                onChangeText={setBookName}
                                placeholder='Title'
                                keyboardType='text'
                                maxLength={30}
                            />

                            <TextInput
                                autoCapitalize='false'
                                style={globalStyles.inputStyle}
                                value={author}
                                onChangeText={setAuthor}
                                placeholder='Author'
                                keyboardType='text'
                                maxLength={30}
                            />

                            <Button 
                                style = {globalStyles.button}
                                title="Add book to your book list"
                                onPress={() => {handleBookAdd()}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    greeting: {
        fontSize: 25,
        fontWeight: "bold",
    },
    info: {
        fontSize: 20,
        textAlign: "center",
    },
    idText: {
        fontSize: 12,
    }
})

>>>>>>> 9036bf19b54ba0db9bb00dea14ab59cdee77cc2e
export default AddBookScreen;