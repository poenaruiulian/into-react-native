import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import Home from "./screens/Home";

const Drawer = createDrawerNavigator()

function DrawerNavigation(props) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={"Home"} component={Home}/>
            <Drawer.Screen name={"Profile"} component={Profile}/>
            <Drawer.Screen name={"Favourites"} component={Favourites}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;