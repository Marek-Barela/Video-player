import '@fontsource/montserrat';
import '@fontsource/gwendolyn';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'context/AuthContext';

const fonts = {
  heading: 'Montserat, sans-serif',
  body: 'Montserat, sans-serif',
};

const theme = extendTheme({ fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
