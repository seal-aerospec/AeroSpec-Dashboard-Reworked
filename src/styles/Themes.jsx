import { createMuiTheme } from '@material-ui/core';

const Themes = createMuiTheme({
  palette: {
     primary: {
        main: '#3E6EB0'
     },
     secondary: {
        main: '#C7C7C7'
     },
  },
  typography: {
     fontFamily: [
       'Montserrat',
       'sans-serif',
     ].join(','),
     fontWeightRegular: 500,
     fontWeightBold: 700,
   },
   props: {
      // disables all ripples in Material UI
      MuiButtonBase: {
        disableRipple: true,
      },
   },
   overrides: {
      MuiSlider: {
         mark: {
           color: '#C7C7C7',
           height: 8,
           width: 8,
           marginTop: -3,
           borderRadius: '50%',
         },
         markLabel: {
           marginTop: 15,
         },
         rail: {
           color: '#C7C7C7',
           marginBottom: 10
         },
         track: {
            color: '#C7C7C7',
         },
         thumb: {
            height: 40,
            width: 15,
            borderRadius: '15%',
            marginTop: -20,
            active: {
               boxShadow: 'none',
            },
            '&.Mui-focusVisible': {
               boxShadow: 'none',
            },
            '&:hover': {
               boxShadow: 'none',
            },
            '&::after': {
               content: 'none',
            },
         },
      },
   }
});

export default Themes;