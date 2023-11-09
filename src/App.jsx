
import './App.css'
import Title from  './componentes/Title.jsx'
import Counter from './componentes/Counter';
import ImageFundo from './assets/fundo.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${ImageFundo})`}}>
      <div className="container">
        <Title title={"Contagem regressiva "}/>
        <div className="countdown-container">
          <Counter title ={"Days"} number={2} ></Counter>
          <Counter title ={"horaus"} number={2} ></Counter>
          <Counter title ={"minuntes"} number={2} ></Counter>
          <Counter title ={"segunds"} number={2} ></Counter>
        </div>
      </div>
    </div>
  );
}

export default App
