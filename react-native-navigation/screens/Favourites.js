import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function Favourites(props) {

    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Favourites Screen</Text>

            <TouchableOpacity onPress={()=>navigator.goBack()}>
                <Text style={{fontSize:16, fontWeight:"bold", color:"blue"}}>Go to Home Screen</Text>
            </TouchableOpacity>
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

export default Favourites;