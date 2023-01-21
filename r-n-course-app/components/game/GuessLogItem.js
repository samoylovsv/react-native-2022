import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constans/colors";

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.roundNumberText}>
                #{roundNumber}
            </Text>
            <Text style={styles.guessText}>
                Opponent's Guess: {guess}
            </Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    roundNumberText: {
        fontFamily: 'open-sans',
    },
    guessText: {
        fontFamily: 'open-sans',
    }
});