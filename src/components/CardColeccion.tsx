// src/components/CardColeccion.tsx

import { useTema } from '@/context/TemaContext';
import { colores, espaciado, tipografia } from '@/styles';
import { Image, StyleSheet, Text, View } from 'react-native';

interface CardColeccionProps {
  titulo: string;
  descripcion: string;
  color: string;
}

export function CardColeccion({ titulo, descripcion, color }: CardColeccionProps) {
  const { tema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;

  return (
    <View style={styles.card}>
      <Text style={[styles.titulo, { color: c.texto }]} numberOfLines={1}>
          {titulo}
        </Text>
      <View style={[styles.img, { backgroundColor: color }]}>        
        <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
      </View>
      <Text style={[styles.descripcion, { color: c.textoSecundario }]} numberOfLines={2}>
        {descripcion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '50%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 80,
    width: '100%',
    aspectRatio: 1,
    borderRadius: espaciado.bordes.sm,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
  descripcion: {
    fontFamily: tipografia.fuentes.cuerpo,
    fontSize: tipografia.sizes.xs,
    paddingBottom: espaciado.xs,
    textAlign: 'center',
  },
  titulo: {
    fontFamily: tipografia.fuentes.ui,
    fontSize: tipografia.sizes.sm,
    paddingTop: espaciado.xs,
  },
});