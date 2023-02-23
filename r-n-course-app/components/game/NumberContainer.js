import {Text, View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constans/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
console.log('# NumberContainer > deviceWidth:', deviceWidth);

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 400 ? 12 : 24,
        margin: deviceWidth < 400 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: 'bold'
    }
});