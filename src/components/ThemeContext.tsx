import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme } from '../assets/themes';

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Detect system preference initially
  const colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === 'light' ? lightTheme : darkTheme,
  );

  const toggleTheme = () => {
    setTheme(prev => (prev.mode === 'light' ? darkTheme : lightTheme));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
