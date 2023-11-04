#  Into React Native ![My Skills](https://skillicons.dev/icons?i=react)

This repository contains the second module that is part of the [Towards mobile applications](https://dbeles.notion.site/Towards-mobile-applications-31586fe8a5c7459ca95455448412dec3?pvs=4) workshop from Google Developer Student Clubs @ West University of Timisoara.

### 📜 Expo ecosystem briefing
> Expo represents a set of tools that is built around React-Native making the life of the developer much easier. One of the main functionalities is the ecosystem that the Expo provides and the fact that you can create a React-Natve application within minutes. More details about how expo really works can be found [here](https://retool.com/blog/expo-cli-vs-react-native-cli).



### ⚙️ How to setup an Expo app

> 1. Install **ExpoGo** from [![AppStore](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/us/app/expo-go/id982107779) or [![GooglePlay](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
> 2. Have **Node.js** installed.
>3. Open a terminal and write:
>   - `npx create-expo-app my-app` - creates an expo app with the name *my-app*
>   - open the *my-app* directory in WebStorm Projects
>   - `npx expo start` -  start the app
> 4. Enjoy your app :D

### 🖥️ Already existent components (React Native’s defaults & Expo SDK)

> Components are bits of code used to create React-Native applications. React-Native has some built-in components that can be used to create our app, such as `View`, `Text` and `Image`. React-Native already implements these components and can be used after we import them:
> ``` js
> import {Image, Text, View} from 'react-native';
> ```
> Styles can be applied using the `StyleSheet` library, which is an abstraction similar to CSS:
> ```js
>   const styles = StyleSheet.create({
>     container: {
>      flex: 1,
>      backgroundColor: '#fff',
>      alignItems: 'center',
>      justifyContent: 'center',
>    },
>   });
> 
> ...
> 
>   <View style={styles.container}>
>     ...
>   <View>
> ```
> Build-in components can be used for creating new custom ones so that we can create what we envisioned. More build-in React-Native components we can find [here](https://reactnative.dev/docs/intro-react-native-components) and if that is not enough Expo provides a lot of components too, [here](https://docs.expo.dev/versions/latest/).
