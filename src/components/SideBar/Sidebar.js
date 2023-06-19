import React from 'react';
import {CssBaseline, Drawer, Hidden, IconButton, List, ListItem,  ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';


const SideBar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  const drawer = (
      <List  className={classes.toolbar}>
        {['About Me', 'Skills', 'Projects', 'Contact'].map((text, index) => (
          <ListItem button key={text} >
              <ListItemText primary = {
              <Typography variant="h5" className={classes.sidebarItem} color="primary">
                {text}
              </Typography>} />
          </ListItem>
        ))}
      </List>
      
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      {/* <nav className={classes.drawer} aria-label="mailbox folders"> */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      {/* </nav> */}
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
   </div>
  );
}


export default SideBar;