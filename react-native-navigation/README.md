## 🧭 Navigation setup 

#### General setup
1. `npm install @react-navigation/native`
2. `expo install react-native-screens react-native-safe-area-context`

#### Stack Navigation setup steps
1. `npm install @react-navigation/native-stack`


<p align="center">
<img src="./images/stack1.png" width="230" height="500">
<img src="./images/stack2.png" width="230" height="500">
<img src="./images/stack3.png" width="230" height="500">
<img src="./images/stackrec.gif" width="230" height="500">
</p>

#### Tab Navigation setup steps
1. `npm install @react-navigation/bottom-tabs`
2. `npm install @expo/vector-icons` // note that this is optional, and it is only necessary if you would like those icons for the bottom tabs

<p align="center">
<img src="./images/tab1.png" width="230" height="500">
<img src="./images/tabrec.gif" width="230" height="500">
</p>

#### Drawer Navigation setup steps
1. `npm install @react-navigation/drawer`
2. `expo install react-native-gesture-handler react-native-reanimated`
3. Add the following plugin in `babel.config.js`:
```js
  ...
  return {
    ...
    plugins: [
      'react-native-reanimated/plugin',
    ],
  }
  ...
```

<p align="center">
<img src="./images/drawer1.png" width="230" height="500">
<img src="./images/drawer2.png" width="230" height="500">
<img src="./images/drawerrec.gif" width="230" height="500">
</p>



[Extra Docs](https://reactnavigation.org/docs/getting-started/)