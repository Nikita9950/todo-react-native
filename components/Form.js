import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { useState } from "react";


export const Form = ({ addHandler }) => {
    const [text, setText] = useState('');

    const onChange = (text) => {
        setText(text);
    };

    const addElement = (text) => {
        addHandler(text);
        setText('');
    }

    return (
        <View>
            <TextInput value={text} style={styles.input} onChangeText={onChange} placeholder='add case...'/>
            <Button color='green' onPress={() => addElement(text)} title='add' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
    }
});
