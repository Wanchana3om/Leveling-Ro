// ** Type Imports
import { PaletteMode } from '@mui/material'

const DefaultPalette = (mode: PaletteMode) => {
  // ** Vars

  return {
    common: {
      black: '#101828',
      white: '#FFF'
    },
    mode: mode,
    primary: {
      light: '#5EA8DC',
      main: '#074E9F',
      dark: '#0A6EE1',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#F2F4FF',
      main: '#22AB67',
      dark: '#6ACD9C',
      contrastText: '#FFF'
    },
    success: {
      light: '#A5D88F',
      main: '#07A721',
      dark: '#72BC76',
      contrastText: '#FFF',
      500: '#58B639'
    },
    error: {
      light: '#FCEFEF',
      main: '#D92D20',
      dark: '#950505',
      contrastText: '#FFF'
    },
    warning: {
      light: '#FDEDE4',
      main: '#F8BD26',
      dark: '#F8AC72',
      contrastText: '#FFF',
      100: '#FBDAA4',
      600: '#DEA922'
    },
    info: {
      light: '#F4F4F4',
      main: '#7A7A7A',
      dark: '#616161',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F4F4F4',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#A3A3A3',
      500: '#7A7A7A',
      600: '#757575',
      700: '#616161',
      800: '#515151',
      900: '#212121',
      A100: '#F2F4F7',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    base: {
      25: '#FFFFFF',
      50: '#F9FAFB',
      75: '#F6F7F9',
      100: '#F2F4F7',
      200: '#E4E7EC',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828'
    },
  }
}

export default DefaultPalette
