// app/index.tsx

import { useTema } from '@/context/TemaContext';
import { colores } from '@/styles';
import { crearEstilos } from '@/styles/screens/index';
import { Text, View } from 'react-native';

export default function Index() {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;
  const styles = crearEstilos(c);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola mundo</Text>
    </View>
  );
}