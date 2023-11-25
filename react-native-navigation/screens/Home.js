import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Home(props) {

    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Home Screen</Text>
                <TouchableOpacity onPress={()=>navigator.navigate("Favourites")}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:"blue"}}>Go to Favourites Screen</Text>
                </TouchableOpacity>
            </View>
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

export default Home;