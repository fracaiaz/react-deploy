import logo from './logo.svg';
import './App.css';
import profileImage from './img/hp.png'
import profileImage2 from './img/harry.png'
import { Container,Row,Col } from 'reactstrap'


function App() {

  
  console.log("hai risolto il misfatto")
  return (
    <div className="App">
      <Container>
        <Row>
      <h1>CACCIA AL TESORO 2021</h1>
      <h2>Azione cattolica ACG Santa Maria la Carità </h2>
      </Row>
      <Row>
        <Col sm="6">
      <img src={profileImage} alt=""/>
      </Col>
      <Col sm="6"></Col>
      </Row>
      <Row>
      
      <img src={profileImage2} alt="profile-image"/>
      </Row>
      </Container>
    </div>
    
  );
}

export default App;
