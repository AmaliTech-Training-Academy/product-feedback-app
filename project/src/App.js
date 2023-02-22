import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import ProductApp from './Routes/routes';

const Wrapper = ({children}) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
    <div className="App">
      <Wrapper>
        <ProductApp/>
      </Wrapper>
    </div>
  );
}

export default App;
