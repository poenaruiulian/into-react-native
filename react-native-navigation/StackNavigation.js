import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";

const Stack = createNativeStackNavigator()

function StackNavigation(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"Profile"} component={Profile}/>
            <Stack.Screen name={"Favourites"} component={Favourites}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;