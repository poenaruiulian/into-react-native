import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import BottomTabNavigation from "./BottomTabNavigation";
import DrawerNavigation from "./DrawerNavigation";

export default function App() {
  return (
  <NavigationContainer>
    {/*<StackNavigation/>*/}
    {/*<BottomTabNavigation/>*/}
    <DrawerNavigation/>
  </NavigationContainer>
  );
}

