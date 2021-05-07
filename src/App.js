
import './App.css';
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const darkFishLogo = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1619820542/Project%202_API%20Calls/GoFish_logo-01_apx6bm.png" alt="fishing logo" id="fish-logo"/>
  // const lightFishLogo = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620154675/Project%202_API%20Calls/GoFish_logo_LtGrey-01_y27m6m.png" alt="fishing logo" id="fish-logo"/>

  return (
    <div className="App">
      <Header 
       darkFishLogo={darkFishLogo}
      //  lightFishLogo={lightFishLogo}
       />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
