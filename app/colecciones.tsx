// app/colecciones.tsx

import { CardColeccion } from '@/components/CardColeccion';
import { ContenedorPantalla } from '@/components/ContenedorPantalla';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useTema } from '@/context/TemaContext';
import { colores } from '@/styles';
import { ScrollView, StyleSheet, View } from 'react-native';

const COLECCIONES = [
  { id: '1', titulo: 'Naturaleza', descripcion: 'Fotos y links sobre naturaleza', color: '#001b0aff' },
  { id: '2', titulo: 'Tecnología', descripcion: 'Artículos y recursos tech', color: '#000d1dff' },
  { id: '3', titulo: 'Diseño', descripcion: 'Inspiración y referencias', color: '#2e0018ff' },
  { id: '4', titulo: 'Música', descripcion: 'Playlists y artistas', color: '#321700ff' },
  { id: '5', titulo: 'Viajes', descripcion: 'Destinos y guías de viaje', color: '#060017ff' },
  { id: '6', titulo: 'Recetas', descripcion: 'Ideas y recetas de cocina', color: '#3e3100ff' },
];

export default function Colecciones() {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;

  return (
    <ContenedorPantalla>
      <Header />
      <ScrollView style={{ flex: 1, backgroundColor: c.fondo }}>
        <View style={styles.grid}>
          {COLECCIONES.map((item) => (
            <CardColeccion
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              color={item.color}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </ContenedorPantalla>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 600,
    alignSelf: 'center',
  },
});