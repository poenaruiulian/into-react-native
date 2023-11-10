import {StyleSheet, View, Text, Image} from "react-native";

const CompanyBadgeComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.badgeContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.notch}>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require("./cat.avif")} style={styles.imageStyle}/>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.firstNameStyle}>Joshua</Text>
                    <Text style={styles.lastNameStyle}>The Cat</Text>
                </View>
                <Text style={styles.job}>Pet</Text>
                <Image source={require("./logo.png")} style={styles.logoStyle}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeContainer: {
        backgroundColor: "#fff",
        height: 500,
        width: 300,
        borderRadius: 30,
        alignItems: "center"
    },
    topContainer: {
        backgroundColor: "#214ac2",
        height: 320,
        width: 300,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 137,
        borderBottomRightRadius: 137,
    },
    notch: {
        height: 20,
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 40,
        marginTop: 30

    },
    imageStyle: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100,
        borderStyle: "dashed",
        padding: 10,
        marginTop: 40

    },
    textContainer: {
        marginTop: 30,
        flexDirection: "row",
        gap: 5
    },
    firstNameStyle: {
        fontSize: 28,
        fontWeight: "600"
    },
    lastNameStyle: {
        fontSize: 28
    },
    job: {
        fontSize: 18,
        fontWeight: "300",
        color: "grey"
    },
    logoStyle: {
        height: 40,
        width: 52,
        marginTop: 25
    },


})

export default CompanyBadgeComponent