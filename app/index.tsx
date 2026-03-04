// app/index.tsx

import { ContenedorPantalla } from '@/components/ContenedorPantalla';
import { useTema } from '@/context/TemaContext';
import { colores } from '@/styles';
import { crearEstilos } from '@/styles/screens/index';
import { Text, View } from 'react-native';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Index() {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;
  const styles = crearEstilos(c);

  return (
    <ContenedorPantalla>
      <Header />
      <View style={styles.container}>
        <Text style={styles.texto}>Hola mundo</Text>      
      </View>
      <Footer />
    </ContenedorPantalla>
  );
}