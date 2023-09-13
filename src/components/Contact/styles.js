import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    h1:{
        fontFamily: 'Francois One' ,
        marginBottom:'60px',
        color: '#c3eafd'
    },
    body1:{
        fontFamily: 'Domine',
        marginLeft:'3px',
        marginBottom:'25px',
        color: '#fafafa'
    },
    content:{
        textAlign:'left',
        margin: '3rem 0'
    },
    icon:{
        color: '#c3eafd' ,
        marginRight:'8px',
    },
    socialicon:{
        color: '#c3eafd' ,
        marginRight:'50px',
        cursor: 'pointer'
    }
})) 