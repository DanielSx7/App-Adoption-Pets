import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function AdoptionScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [motivo, setMotivo] = useState('');

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Formulário de Adoção</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua idade"
        placeholderTextColor="#999"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#999"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Por que deseja adotar?"
        placeholderTextColor="#999"
        value={motivo}
        onChangeText={setMotivo}
        multiline
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          alert('Adoção solicitada com sucesso!');
          setNome('');
          setIdade('');
          setTelefone('');
          setMotivo('');
        }}
      >
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },

  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});