import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Coinpage from './Components/Coinpage';
import { makeStyles } from '@material-ui/core';
import AllCoins from './Components/AllCoins';

function App() {

  const useStyles = makeStyles(() => ({
    App:
    {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',

    },
  }));

  const classes = useStyles();

  return (

    
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path='/' element={ <Homepage />} />
          <Route exact path='/coins/:id' element={<Coinpage />} />
          <Route exact path='/AllCoins' element={ <AllCoins />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
