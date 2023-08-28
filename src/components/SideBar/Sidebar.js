import React from 'react';
import { useState } from 'react';
import {CssBaseline, Drawer, Hidden, IconButton, List, ListItem,  ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



const SideBar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const [isHovered, setisHovered] = useState(null);
  
  const handleMouseEnter = (index) => {
    setisHovered(index);
  };

  const handleMouseLeave = () => {
    setisHovered(null);
  }
  const textColor = isHovered? 'blue' : 'white'
  const drawer = (
      <List  className={classes.toolbar}>
        {['About Me', 'Resume', 'Projects', 'Contact'].map((text, index) => (
          <ListItem button key={text} >
              <Link
                  to={`/${text.toLowerCase().replace(/\s+/g,'-')}`}
                  className={`${classes.sidebarItem} ${
                    isHovered  === index ? classes.hovered : ''}`
                  }
                  style = {{color: isHovered === index ? '#03a9f4' : 'white' , textDecoration:'none'}}
                  // onClick={handleClick} 
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => handleMouseEnter(index)}>
                  <ListItemText primary = {<Typography variant="h4">{text}</Typography>}/>
              </Link>
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
      <nav className={classes.drawer} aria-label="mailbox folders">
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
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
   </div>
  );
}
export default SideBar