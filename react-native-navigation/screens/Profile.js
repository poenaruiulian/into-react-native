import React from 'react';
import {StyleSheet, Text, View} from "react-native";

function Profile(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Profile Screen</Text>
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

export default Profile;