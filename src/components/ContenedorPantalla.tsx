// src/components/ContenedorPantalla.tsx

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContenedorPantallaProps {
  children: React.ReactNode;
}

export function ContenedorPantalla({ children }: ContenedorPantallaProps) {
  return (
    <SafeAreaView style={styles.base}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});