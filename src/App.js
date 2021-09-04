import logo from './logo.svg';
import './App.css';
import profileImage from './img/hp.png'
import profileImage2 from './img/harry.png'
import MediaQuery from react-responsove
const isMobileDevice = useMediaQuery({
  query: "(min-device-width: 480px)",
});

const isTabletDevice = useMediaQuery({
  query: "(min-device-width: 768px)",
});

const isLaptop = useMediaQuery({
  query: "(min-device-width: 1024px)",
});

const isDesktop = useMediaQuery({
  query: "(min-device-width: 1200px)",
});

const isBigScreen = useMediaQuery({
  query: "(min-device-width: 1201px )",
});

function App() {
  console.log("hai risolto il misfatto")
  return (
    <div className="App">
      <h1>CACCIA AL TESORO 2021</h1>
      <h2>Azione cattolica ACG Santa Maria la Carità </h2>
      {isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}
  {isBigScreen && <BigScreen />}
  <MediaQuery minDeviceWidth={1224}>
  <p>Manipulate me with the powers of React Responsive</p>
</MediaQuery>
</>}
      <img src={profileImage} alt=""/>
      <img src={profileImage2} alt="profile-image"/>

    </div>
  );
}

export default App;
