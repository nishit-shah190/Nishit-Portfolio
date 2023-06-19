import {alpha , makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    toolbar:{
        display:"flex",
        justifyContent: 'flex-end',

        
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    typography: {
        marginLeft:'20px',
        
    },
    nav:{
        background: "black",
        borderStyle:'none',
        width: '100%',
        margin: '0px 0px',
        display: 'flex',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'right',
        padding: '10px 40px',
        
    },
    body:{
        margin: '0px 0px',
        padding:'0px 0px',
    }
}))