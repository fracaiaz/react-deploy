import logo from './logo.svg';
import './App.css';
import profileImage from './img/hp.png'

function App() {
  console.log("hai risolto il misfatto")
  return (
    <div className="App">
      <h1>CACCIA AL TESORO 2021</h1>
      <h2>Author: fracaiaz</h2>
      <img src={profileImage} alt="profile-image"/>
    </div>
  );
}

export default App;
