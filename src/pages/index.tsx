import React from 'react';
import { HomePage } from '../Views/Home';
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}
