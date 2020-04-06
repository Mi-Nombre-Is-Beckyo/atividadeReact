import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LembreteInput = (props) =>{
    const [lembrete, setLembrete] = useState ('');

    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);    
    }

    return (
        <View style={styles.lembreteView}>
        {/*Usuário irá inserir lembretes aqui*/}
        <TextInput 
          placeholder="Nome"
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          title="+"
          onPress={() => {props.onAdicionarLembrete(lembrete)}}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
    },
    lembreteTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 4
    }
});

export default LembreteInput;
