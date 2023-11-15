
import ImageFundo from './assets/natal.jpg'
import './App.css'
import Title from  './componentes/Title.jsx'
import Counter from './componentes/Counter';

import useCountdown from './hooks/useCountdown';



function App() {
  const [day, hour, minute, segund] = useCountdown("Dec 25, 2023, 00:00:00")
  return (
    
    <div className="App" style={{backgroundImage: `url(${ImageFundo})` }}>
      <div className="container">
        <Title title={"Contagem regressiva para o Natal "}/>
        <div className="countdown-container">
          <Counter title ={"Days"} number={day} ></Counter>
          <Counter title ={"hours"} number={hour} ></Counter>
          <Counter title ={"minutes"} number={minute} ></Counter>
          <Counter title ={"segunds"} number={segund} ></Counter>
        </div>
      </div>
    </div>
    
  );
}

export default App
