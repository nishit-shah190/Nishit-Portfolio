import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    h1:{
        fontFamily: 'Francois One',
        color:'#c3eafd' 
    },
    content:{
      textAlign:'left',
      margin: '3rem 0'
  },
    downloadButton: {
        marginTop: '50px',
        backgroundColor: 'transparent',
        color: '#c3eafd',
        border: '1px solid #c3eafd',
        '&:hover': {
          backgroundColor: '#c3eafd', // Blue background on hover
          color: 'black', // Black text on hover
        },
      },
      buttonContent: {
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        marginRight: theme.spacing(1), // Spacing between icon and text
      },
    
}));