
import './App.css'
import Title from  './componentes/Title.jsx'
function App() {
  return (
    <div className="App">
      <div className="container">
        <Title title={"Contagem regressiva "}/>
        <div className="countdown-container">
          <p>3 day</p>
        </div>
      </div>
    </div>
  );
}

export default App
