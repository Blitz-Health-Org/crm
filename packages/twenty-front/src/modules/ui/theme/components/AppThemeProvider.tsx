import { ThemeProvider } from '@emotion/react';

import { lightTheme } from '@/ui/theme/constants/theme';

import { useColorScheme } from '../hooks/useColorScheme';
import { useSystemColorScheme } from '../hooks/useSystemColorScheme';

type AppThemeProviderProps = {
  children: JSX.Element;
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const systemColorScheme = useSystemColorScheme();

  const { colorScheme } = useColorScheme();

  const computedColorScheme =
    colorScheme === 'System' ? systemColorScheme : colorScheme;

  // const theme = computedColorScheme === 'Dark' ? darkTheme : lightTheme; //MAKE ALWAYS LIGHT
  const theme = lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
