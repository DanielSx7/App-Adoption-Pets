import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { pet } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image source={{ uri: pet.imagem }} style={styles.image} />

      <Text style={styles.info}>{pet.nome}</Text>
      <Text>Raça: {pet.raca}</Text>
      <Text>Idade: {pet.idade}</Text>

      <Text style={styles.section}>Descrição</Text>
      <Text>{pet.descricao}</Text>

      <Text style={styles.section}>Cuidados</Text>

      <Text style={styles.sub}>🍖 Alimentação</Text>
      {pet.cuidados.alimentacao.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Text style={styles.sub}>🛁 Higiene</Text>
      {pet.cuidados.higiene.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <Text style={styles.sub}>💉 Saúde</Text>
      {pet.cuidados.saude.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

      <View style={{ marginTop: 20 }}>
        <Button 
          title="Quero Adotar"
          onPress={() => navigation.navigate('Adoção')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 15
  },

  info: {
    color: '#555',
    marginBottom: 5
  },

  section: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },

  sub: {
    marginTop: 5,
    fontWeight: 'bold'
  }
});