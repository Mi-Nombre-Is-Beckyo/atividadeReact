import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';




const LembreteItem = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>       
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default LembreteItem;