import './App.css';
import Flavanoids from './Components/Flavanoids';
import Gamma from './Components/Gamma';
import alcoholData from './DataSet'; 

function App() {
  return (
    <div >
    
      <Flavanoids data ={alcoholData}/>
      <Gamma data = {alcoholData}/>

    </div>
  );
}

export default App;
