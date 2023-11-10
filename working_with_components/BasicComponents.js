import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";

const BasicComponents = () => {
    return(
        <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>
                {"Welcome to the 4th\nMobile Applications Workshop"}
            </Text>

            <TextInput
                placeholder={"Type something here..."}
                onChange={()=>console.log("Some functionality here")}
                style={styles.textInputStyle}
            />

            {/*<Image source={{uri:"link.com"}}/>*/}
            <Image
                source={require("./dog.jpg")}
                style={styles.imageStyle}
            />

            <Button
                title={"Why did the button fall of the cliff?"}
                onPress={() => alert("It was pushed.")}
            />



        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#FFFFDD',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textStyle:{
        fontStyle:"italic",
        fontSize:20,
        color:"#61A3BA",
        padding:40,
        textAlign:"center"
    },
    textInputStyle:{
        backgroundColor:"#A2C579",
        padding:10,
        borderRadius:10,
        width:200,
        color:"#FFFFDD",
        borderColor:"#61A3BA",
        borderWidth:3,
        borderStyle:"dotted"
    },
    imageStyle:{
        height:200,
        width:200,
        borderRadius:100,
        borderWidth:3,
        borderColor:"#61A3BA",
    },
});

export default BasicComponents