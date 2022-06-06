import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const ListItem = ({ elem, deleteHandler }) => {
    return (
        <TouchableOpacity onPress={() => deleteHandler(elem.key)}>
            <Text style={styles.text}>{elem.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
    }
});
