// src/styles/screens/index.ts

import { colores, tipografia } from '@/styles';
import { StyleSheet } from 'react-native';

export function crearEstilos(c: typeof colores.dark) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: c.fondo,
    },
    texto: {
      fontFamily: tipografia.fuentes.titulo,
      fontSize: tipografia.sizes.xxl,
      color: c.texto,
    },
  });
}