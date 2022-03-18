import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import {
    CircularProgress,
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core";

const CoinInfo = ( {coin} ) => {
    const [HistoricalData, setHistoricalData] = useState();
    const [days, setdays] = useState(1);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}`
        )
          .then((res) => {
            setHistoricalData(res.data);
          })
      }, [])
    
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      }); 

    const useStyles = makeStyles((theme) => ({
        container: {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding: 40,
            [theme.breakpoints.down("md")]: {
              width: "100%",
              marginTop: 0,
              padding: 20,
              paddingTop: 0,
            },
          },
    }));
    const classes = useStyles();
    console.log(coin)
      
  return (
  
        <ThemeProvider theme={darkTheme}>
            <div className={classes.container}>

            </div>
        </ThemeProvider>
    
  )
}

export default CoinInfo