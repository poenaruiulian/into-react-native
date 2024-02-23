import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('Mounted!');
    }, []);

    return (
        <View style={styles.container}>
            <Text>My number is {number}</Text>
            <Button title={"MINUS"} onPress={() => setNumber(number > 0 ? number - 1 : number)}/>
            <Button title={"PLUS"} onPress={() => setNumber(prev => prev + 1)}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
