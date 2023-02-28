import { StyleSheet } from 'react-native';
import { IThemeContext } from '../types/ThemeContext';

export default (context: IThemeContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: context.colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
  };
};
