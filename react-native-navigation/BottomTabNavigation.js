import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";

const Tab = createBottomTabNavigator()

function BottomTabNavigation(props) {
    return (
       <Tab.Navigator>
           <Tab.Screen name={"Home"} component={Home}/>
           <Tab.Screen name={"Profile"} component={Profile}/>
           <Tab.Screen name={"Favourites"} component={Favourites}/>
       </Tab.Navigator>
    );
}

export default BottomTabNavigation;