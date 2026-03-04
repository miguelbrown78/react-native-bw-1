// src/components/Header.tsx

import { MenuHeader } from '@/components/MenuHeader';
import { useTema } from '@/context/TemaContext';
import { colores, tipografia } from '@/styles';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Header() {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;

  return (
    <View style={[styles.contenedor, { backgroundColor: c.fondo, borderBottomColor: c.borde }]}>
      <View style={styles.seccion}>
        <Pressable onPress={() => router.push('/')}>
          <Text style={[styles.texto, { color: c.texto }]}>App Brown</Text>
        </Pressable>
      </View>
      <View style={[styles.seccion, styles.centro]}>
        <Pressable onPress={() => router.push('/contacto')}>
          <Text style={[styles.boton, { color: c.texto }]}>Contacto</Text>
        </Pressable>
      </View>
      <View style={[styles.seccion, styles.derecha]}>
        <MenuHeader />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  seccion: {
    flex: 1,
  },
  centro: {
    alignItems: 'center',
  },
  texto: {
    fontFamily: tipografia.fuentes.titulo,
    fontSize: tipografia.sizes.xl,
  },
  boton: {
    fontFamily: tipografia.fuentes.ui,
    fontSize: tipografia.sizes.md,
  },

   derecha: {
    alignItems: 'flex-end',
  },
});