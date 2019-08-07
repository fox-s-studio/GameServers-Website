import React,{useState, useEffect} from 'react';
import Navbar from './layout/Navbar/Navbar';
import Header from './components/Header/Header';
import Servers from './components/Servers/Servers';

function App() {


  const [navActive, setNavActive] = useState(false);

  const handleScroll = e => {
    let element = e.target;
    console.log(e.target.scrollingElement.scrollTop)
    if (element.scrollingElement.scrollTop > 150){
      setNavActive(true);
    } else if (element.scrollingElement.scrollTop < 150 && !navActive){
      setNavActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  });

  return (
    <div className="App" onScroll={handleScroll}>
      <Navbar active={navActive}/>
      <Header />
      <Servers />
    </div>
  );
}

export default App;
