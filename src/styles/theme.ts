import {
  extendTheme,
  type ThemeConfig,
  theme as ChakraTheme,
  border,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        bg: 'linear-gradient(90deg, #202D60 0%,  rgba(22,28,56,1) 40%, #161B38 100%)',
        color: 'white',
        lineHeight: 'tall',
        fontFamily: 'Montserrat',
        margin: '0',
      },

      'ul, ol': {
        styleType: 'none',
        margin: '0px',
      },
    },
  },
});
