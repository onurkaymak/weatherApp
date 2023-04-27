import classes from './App.module.scss';

import Card from './components/Card';
import DailyForecast from './components/DailyForecast';
import DetailedForecast from './components/DetailedForecast';

function App() {
  return (
    <div className={classes.container}>
      <Card>
        <DailyForecast />
        <DetailedForecast />
      </Card>
    </div>
  );
}

export default App;
