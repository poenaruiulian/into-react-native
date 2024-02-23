import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [catObject, setCatObject] = useState([]);

    const showACat = () => fetch("https://api.thecatapi.com/v1/images/search")
        .then(resp => resp.json())
        .then(resp => setCatObject(resp));

    useEffect(() => {
        showACat()
    }, []);

    return (
        <View style={styles.container}>
            {catObject[0] && <>
                <Image source={{uri: catObject[0].url}} height={500} width={400}/>
                <Button title={"Another cat, please 🥺"} onPress={showACat}/>
            </>}
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
