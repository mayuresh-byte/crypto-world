import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
    CircularProgress,
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core";

const CoinInfo = ( ) => {
    const { coin } = useParams()
    const [HistoricalData, setHistoricalData] = useState();
    const [days, setdays] = useState(1);
    const [flag,setflag] = useState(false);
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
        )
          .then((res) => {
            setflag(true);
            setHistoricalData(res.data);
            
          })
      }, [])
      console.log(HistoricalData);

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
    
      
  return (
  
        <ThemeProvider theme={darkTheme}>
            <div className={classes.container}>
                {
                    !HistoricalData | flag===false ? (
                        <CircularProgress
                          style={{ color: "white" }}
                          size={190}
                          thickness={1}
                        />
                      ) : (
                          <>
                            <h2>Lava Lovde</h2>
                          </>
                      )
                }
            </div>
        </ThemeProvider>
    
  )
}

export default CoinInfo