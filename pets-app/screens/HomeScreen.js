import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1' }}
      style={styles.container}
      resizeMode="cover">
      
    <View style={styles.overlay}>
      
      
      <Text style={styles.title}>
        🐾 Adote seu Pet
      </Text>

      <Text style={styles.subtitle}>
        Encontre seu novo melhor amigo!
      </Text>

      <Button
        title="Ver Pets Disponíveis"
        onPress={() => navigation.navigate('Lista')}
      />

      <View style={styles.spacing}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)' // escurece fundo
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15
  },

  subtitle: {
    color: '#fff',
    marginBottom: 20
  },
  spacing: {
    marginTop: 10,
  }
});