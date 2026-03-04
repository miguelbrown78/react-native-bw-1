// src/context/TemaContext.tsx

import { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

type Tema = 'dark' | 'light';

interface TemaContextType {
  tema: Tema;
  cambiarTema: () => void;
}

const TemaContext = createContext<TemaContextType | null>(null);

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const esquema = useColorScheme();
  const [tema, setTema] = useState<Tema>(esquema === 'light' ? 'light' : 'dark');

  function cambiarTema() {
    setTema((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error('useTema debe usarse dentro de TemaProvider');
  return ctx;
}