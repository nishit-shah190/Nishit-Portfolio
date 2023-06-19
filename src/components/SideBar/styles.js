import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';

const drawerWidth = 215;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  // drawer: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: drawerWidth,
  //     flexShrink: 0,
  //   },
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbar:{
    marginTop:'40px'
  },
  sidebarItem :{
    marginTop:'10px',
    display:'flex',
    justifyContent:'center',
    fontFamily:'Helvetica ',
    color:'white'
  },
  drawerPaper: {
    // marginTop:'80px',
    width: drawerWidth,
    // height:'350px',
    background:'black'
  },
}));

