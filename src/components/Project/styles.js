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
    root: {
      maxWidth: 420,
      marginTop:'30px',
      height:480,
      backgroundColor:'#212121',
      position:'relative'
    },
    media: {
      height: 200,
    },
    content:{
      color:'white'
    },
    techbutton:{
      color:'#c3eafd',
      display: 'inline flex',
      marginRight: theme.spacing(1)
    },
    link:{
      position: 'absolute',
      bottom: 0,
      left: 0,      
    }
  }));