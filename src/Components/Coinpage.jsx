import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinInfo from "./CoinInfo";
import parse from 'html-react-parser';
import { CircularProgress, createTheme, makeStyles, ThemeProvider, Typography } from "@material-ui/core";



const Coinpage = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState();

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
      })
  }, [])

  console.log(coin);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },

    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },

    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },

    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },

  }))
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              ${" "}
              {(
                coin?.market_data.current_price['USD'.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              MArket Cap :
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              ${(coin?.market_data.market_cap['USD'.toLowerCase()]
                  .toString()
                  .slice(0, -6))}
            </Typography>
          </span>

        </div>
      </div>

      <CoinInfo />

    </div>

  )
}

export default Coinpage