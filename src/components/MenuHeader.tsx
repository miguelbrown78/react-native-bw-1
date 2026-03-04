// src/components/MenuHeader.tsx

import { useTema } from '@/context/TemaContext';
import { colores, tipografia } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function MenuHeader() {
  const { tema, cambiarTema } = useTema();
  const c = tema === 'dark' ? colores.dark : colores.light;
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setMenuVisible(true)}>
        <Ionicons name="grid" size={22} color={c.texto} />
      </Pressable>
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.fondo} onPress={() => setMenuVisible(false)}>
          <View style={[styles.dropdown, { backgroundColor: c.card, borderColor: c.borde }]}>
            <TouchableOpacity
              style={styles.opcion}
              onPress={() => { cambiarTema(); setMenuVisible(false); }}
            >
              <Text style={[styles.opcionTexto, { color: c.texto }]}>
                {tema === 'dark' ? '☀️ Tema claro' : '🌙 Tema oscuro'}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 16,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    minWidth: 160,
  },
  opcion: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  opcionTexto: {
    fontFamily: tipografia.fuentes.cuerpo,
    fontSize: tipografia.sizes.md,
  },
});