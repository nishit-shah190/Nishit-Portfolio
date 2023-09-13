import React from 'react'
import { Typography, Container } from '@material-ui/core'
import useStyles from './styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Contact = () => {
  const classes = useStyles();
  const email = 'nishitshah190@gmail.com'
  const linkedinLink = 'https://www.linkedin.com/in/nishit-shah-150250215/';
  const githubLink = 'https://github.com/nishit-shah190';
  const instagramLink = 'https://www.instagram.com/_nishit_shah/';
  const twitterLink = 'https://twitter.com/nishit_s09';
  const handleEmail = () => {
    window.location.href = `mailto: ${email}`
    
  }
  return (
    <Container maxWidth="md">
      <div className={classes.content}>
        <Typography variant="h1" className={classes.h1} gutterbotttom >
          Contact Info!
        </Typography >
          <Typography variant="h6" className={classes.body1}>
              <p><LocationOnIcon  className={classes.icon}/>
                <strong>Location:</strong> Charlotte, North Carolina, United States</p>
              <p><MailOutlineIcon className={classes.icon}/>
                <strong>Email:</strong> <span onClick={handleEmail} style={{ cursor: 'pointer' }}>nishitshah190@gmail.com</span></p>
              
              <p><PhoneIcon className={classes.icon}/>
                <strong>Phone:</strong> +1 (940) 843-5986</p>
                <LinkedInIcon
                  className={classes.socialicon}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = '#c3eafd')}
                  onClick={() => window.open(linkedinLink, '_blank')}
                />
                <GitHubIcon
                  className={classes.socialicon}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = '#c3eafd')}
                  onClick={() => window.open(githubLink, '_blank')}
                />
                <InstagramIcon
                  className={classes.socialicon}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = '#c3eafd')}
                  onClick={() => window.open(instagramLink, '_blank')}
                />
                <TwitterIcon
                  className={classes.socialicon}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = '#c3eafd')}
                  onClick={() => window.open(twitterLink, '_blank')}
                />
              
          </Typography>

     </div>
</Container>

  )
}

export default Contact