import { useContext } from 'react';

import classes from './App.module.scss';

import Card from './components/Card';
import DailyForecast from './components/DailyForecast';
import DetailedForecast from './components/DetailedForecast';

import WeatherContext from './store/weather-context';


function App() {

  const ctx = useContext(WeatherContext);

  const buttonHandler = () => {
    ctx.setError(false)
    ctx.setErrorInfo({})
  }

  return (
    <div className={classes.container}>
      <Card>
        <DailyForecast />
        <DetailedForecast />
      </Card>
      {ctx.error && (
        <div className={classes.error_container}>
          <div className={classes.error_bg}></div>
          <div className={classes.error_card}>
            <h1>Error</h1>
            <p>{ctx.errorInfo.errorInfo}</p>
            <button className={classes.error_button} type='button' onClick={buttonHandler}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
