// src/components/Footer.tsx

import { useTema } from '@/context/TemaContext';
import { colores, tipografia } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Footer() {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;

  return (
    <View style={[styles.contenedor, { backgroundColor: c.fondo, borderTopColor: c.borde }]}>
      <Pressable style={styles.boton} onPress={() => {}}>
        <Ionicons name="link" size={22} color={c.texto} />
        <Text style={[styles.texto, { color: c.texto }]}>Links</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={() => {}}>
        <Ionicons name="add-circle" size={22} color={c.texto} />
        <Text style={[styles.texto, { color: c.texto }]}>Añadir</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={() => router.push('/colecciones')}>
        <Ionicons name="folder" size={22} color={c.texto} />
        <Text style={[styles.texto, { color: c.texto }]}>Colecciones</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  boton: {
    alignItems: 'center',
    gap: 4,
  },
  texto: {
    fontFamily: tipografia.fuentes.cuerpo,
    fontSize: tipografia.sizes.xs,
  },
});