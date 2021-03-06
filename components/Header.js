import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Todo list</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver',
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center'
    }
});
