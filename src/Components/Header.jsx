import { AppBar, Toolbar, Typography, Container, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {

    const {currency, setcurrency} = CryptoState();

    const useStyles = makeStyles((theme) => ({
        title: {
          flex: 1,
          color: "gold",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          cursor: "pointer",
        },
      }));

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          type: 'dark',
        },
    });
     
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={() => navigate('/')} className={classes.title} variant='h6' >Crypto Hunter</Typography>
                    <Select variant='outlined' style={{width:100, height:40, marginRight:15}} value={currency} onChange = {(e) => setcurrency(e.target.value)} >
                        <MenuItem value={"INR"}>INR</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
}

export default Header