import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';

const drawerWidth = 295;

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
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbar:{
    margin:'auto',
    // display:'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    
  },
  sidebarItem :{
    marginTop:'10px',
    display:'flex',
    justifyContent:'center',
    fontFamily:'Helvetica ',
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
    // marginTop:'80px',
    width: drawerWidth,
    // height:'350px',
    background:'black'
  },
}));

