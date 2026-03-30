import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const pets = [
  {
    id: '1',
    nome: 'Rex',
    tipo: 'cachorro',
    idade: '2 anos',
    raca: 'Labrador',
    imagem: 'https://placedog.net/400/300?id=1',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Proteínas'],
    higiene: ['Banho quinzenal'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '2',
    nome: 'Thor',
    tipo: 'cachorro',
    idade: '4 anos',
    raca: 'Pastor Alemão',
    imagem: 'https://placedog.net/400/300?id=2',
    descricao: 'Pet muito dócil e amigável',
    cuidados: { 
    alimentacao: ['Ração', 'Proteínas'],
    higiene: ['Banho quinzenal'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '3',
    nome: 'Max',
    tipo: 'cachorro',
    idade: '3 anos',
    raca: 'Golden Retriever',
    imagem: 'https://placedog.net/400/300?id=3',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Carne', 'Frango'],
    higiene: ['Banho quinzenal'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '4',
    nome: 'Luna',
    tipo: 'gato',
    idade: '1 ano',
    raca: 'Siamês',
    imagem: 'https://fumigacontinente.com.ar/wp-content/uploads/gatos-siameses.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Peixe'],
    higiene: ['Geralmente só é dado banho em casos específicos'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '5',
    nome: 'Mia',
    tipo: 'gato',
    idade: '2 anos',
    raca: 'Persa',
    imagem: 'https://www.bunko.pet/img/2022/04/03/gato-persa.jpg?__scale=w:1200,h:630,t:2',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Peixe'],
    higiene: ['Geralmente só é dado banho em casos específicos'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '6',
    nome: 'Simba',
    tipo: 'gato',
    idade: '3 anos',
    raca: 'Maine Coon',
    imagem: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/10/63495361e2043_maine-coon-cat-pics.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Peixe'],
    higiene: ['Geralmente só é dado banho em casos específicos'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '7',
    nome: 'Nino',
    tipo: 'hamster',
    idade: '6 meses',
    raca: 'Sírio',
    imagem: 'https://roedoresdomesticos.com/wp-content/uploads/2018/08/hamster-sirio-taxonomia-roedoresdomesticos-768x515.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Mix de sementes', 'Legumes', 'Verduras'],
    higiene: ['Banho de areia (caixa de areia)'],
    saude: ['Vacinas em dia']
    }
  },
  {
    id: '8',
    nome: 'Pipoca',
    tipo: 'hamster',
    idade: '8 meses',
    raca: 'Anão Russo',
    imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2024/07/tudo-sobre-hamster-anao-russo-interna2.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Mix de sementes', 'Legumes', 'Verduras'],
    higiene: ['Banho de areia (caixa de areia)'],
    saude: ['Vacinas em dia']
   }
  },
  {
    id: '9',
    nome: 'Loro',
    tipo: 'ave',
    idade: '1 ano',
    raca: 'Papagaio',
    imagem: 'https://s3.amazonaws.com/media.wikiaves.com.br/images/75/57226_88db94b820abccb9060062446b87364f.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Frutas', 'Sementes'],
    higiene: ['Banho por conta própria da ave'],
    saude: ['Vacinas em dia']
   }
  },
  {
    id: '10',
    nome: 'Neo',
    tipo: 'ave',
    idade: '2 anos',
    raca: 'Calopsita',
    imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2022/03/como-saber-a-idade-da-calopsita-3.jpg',
    descricao: 'Pet muito dócil e amigável',
    cuidados: {
    alimentacao: ['Ração', 'Frutas', 'Sementes'],
    higiene: ['Banho por conta própria da ave'],
    saude: ['Vacinas em dia']
}
  }
];



export default function ListScreen({navigation}) {
  const [filtro, setFiltro] = useState('todos');
  
  const petsFiltrados = pets.filter((pet) => {
  if (filtro === 'todos') return true;
  return pet.tipo === filtro;
});
  return (
    <View style={styles.container}>

  <View style={styles.filtros}>
  <Text 
    style={[styles.filtroTexto, filtro === 'todos' && styles.filtroAtivo]} 
    onPress={() => setFiltro('todos')}
  >
    Todos
  </Text>

  <Text 
    style={[styles.filtroTexto, filtro === 'cachorro' && styles.filtroAtivo]} 
    onPress={() => setFiltro('cachorro')}
  >
    Cães
  </Text>

  <Text 
    style={[styles.filtroTexto, filtro === 'gato' && styles.filtroAtivo]} 
    onPress={() => setFiltro('gato')}
  >
    Gatos
  </Text>

  <Text 
    style={[styles.filtroTexto, filtro === 'hamster' && styles.filtroAtivo]} 
    onPress={() => setFiltro('hamster')}
  >
    Hamsters
  </Text>

  <Text 
    style={[styles.filtroTexto, filtro === 'ave' && styles.filtroAtivo]} 
    onPress={() => setFiltro('ave')}
  >
    Aves
  </Text>
</View>

      <FlatList
        data={petsFiltrados}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate('Detalhes', { pet: item })}
  >
    <Image source={{ uri: item.imagem }} style={styles.image} />

    <View style={styles.cardContent}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.info}>{item.raca}</Text>
      <Text style={styles.info}>{item.idade}</Text>
    </View>
  </TouchableOpacity>
)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10
  },

  filtros: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },

  filtroTexto: {
    backgroundColor: '#ddd',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3
  },

  image: {
    width: '100%',
    height: 160
  },

  cardContent: {
    padding: 10
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  info: {
    color: '#555'
  },
  filtroAtivo: {
  backgroundColor: '#4CAF50',
  color: 'white'
}
});