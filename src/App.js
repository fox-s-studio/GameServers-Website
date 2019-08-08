import React,{useState, useEffect} from 'react';
import Navbar from './layout/Navbar/Navbar';
import Loading from './layout/Loading/Loading';
import Header from './components/Header/Header';
import Servers from './components/Servers/Servers';

function App() {


  const [navActive, setNavActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleScroll = e => {
    let element = e.target;

    if (element.scrollingElement.scrollTop > 150){
      setNavActive(true);
    } else if (element.scrollingElement.scrollTop < 150 && !navActive){
      setNavActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    setTimeout(() => {
      setLoaded(true)
    },5000);
  });

  return (loaded) ? (
    <div className="App" onScroll={handleScroll}>
      <Navbar active={navActive}/>
      <Header />
      <Servers />
    </div>
  ) : (
    <Loading />
  )
}

export default App;
