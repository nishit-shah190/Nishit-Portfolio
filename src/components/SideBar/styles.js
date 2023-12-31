import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';

const drawerWidth = 250;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color:'#c3eafd'
  },
  toolbar: theme.mixins.toolbar,
  toolbar:{
    margin:'auto',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  font:{
    fontFamily: 'Domine',
    fontSize:'30px'
  },
  sidebarItem :{
    marginTop:'10px',
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Domine', 
    marginLeft:'40px',   
    color:'white',
    position: ' relative',
    transition: 'transform 0.3s', '&:hover': {
      transform : 'translateY(-8px)',
      '&::before, &::after':{
        content: '"',
        position: 'absolute',
        left:0,
        right: 0,
        background: 'white',
      },
      '& :: before' :{
        top: '-4px',
      },
      '&::after':{
        bottom: '-4px',
      },
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background:'black',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
  },
  sidebarimage:{
    marginTop:'25px',
    marginLeft:'40px',
    height:'150px',
    width:'150px'
  },
  name:{
    color:'white',
    margin:'1px 0 50px 30px',
    fontWeight:'bold',
    
  }
}));

