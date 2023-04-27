import classes from './App.module.scss';

import Card from './components/Card';
import DailyForecast from './components/DailyForecast';

function App() {
  return (
    <div className={classes.container}>
      <Card>
        <DailyForecast />
      </Card>
    </div>
  );
}

export default App;
