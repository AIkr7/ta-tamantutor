import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      common: {
        white: '#fff',
        darkGrey: '#333',
        black: '#000',
        yellow: '#ffcd34',
        green: '#51b848',
        pink: '#f06ca8',
        blue: '#12b4e7',
      },
      background: {
        default: '#fff',
        paper: '#fff',
      },
      primary: {
        dark: '#333',
        main: '#fff',
        light: '#fff',
      },
      secondary: {
        main: '#333',
        dark: '#fff',
        light: '#333',
        contrastText: '#fff',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      text: {
        primary: '#000',
        secondary: '#fff',
        disabled: 'rgba(51,51,51, 0.5)',
        hint: 'rgba(51,51,51, 1)',
      },
    },
  }),
);
