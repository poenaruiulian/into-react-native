import {TouchableOpacity, View, Text, Image, StyleSheet} from "react-native";

const KComponent = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.cityCardStyle}>

                <Image
                    source = {{uri:"https://xn--urlaub-in-rumnien-2qb.de/wp-content/uploads/2017/10/DJI_0203-1-1-1.jpg"}}
                    style={styles.imageStyle}
                />

                <View style={styles.labelStyle}>
                    <Text style={styles.titleStyle}>Timișoara</Text>
                    <Text style={styles.descriptionStyle}>Historic city, cultural hub, vibrant architecture, Western Romania's gem.</Text>
                </View>

                {/*
                We are using TouchableOpacity to create our own custom button.
                */}
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>Show more</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityCardStyle: {
        width: 375,
        height: 400,
        backgroundColor: "#DDF2FD",
        borderRadius: 20,
        alignItems: "center"
    },
    imageStyle: {
        width: 325,
        height: 200,
        marginTop:20,
        borderRadius: 15,
    },
    labelStyle: {
        alignItems: "left",
        padding:10
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    descriptionStyle: {
        fontSize: 18,
        color: "gray",
        marginTop:10
    },
    btnStyle: {
        width: 325,
        height: 50,
        backgroundColor: "#63a4e6",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop:10
    },
    btnTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})

export default KComponent;