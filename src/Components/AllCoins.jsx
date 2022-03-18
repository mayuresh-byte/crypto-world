import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Avatar from '@material-ui/core/avatar'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        cursor:'pointer',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        float: 'right',
        width: 145,
        height: 145,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const AllCoins = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [coins, setCoins] = useState([]);


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
            })
    }, [])
    
    return (
        <div>
            <Container>
                <Grid container spacing={3}>

                    {coins.map((coin) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} >
                                <Card onClick={() => navigate(`/coins/${coin.id}`)} className={classes.root}>
                                    <CardContent>
                                        <Avatar className={classes.img} alt="Sorry !" src={coin.image} />
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            CrypWorld
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {coin.name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            Current Price: $ {coin.current_price}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            Total Volume: {coin.total_volume}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>
        </div>
    )
}

export default AllCoins