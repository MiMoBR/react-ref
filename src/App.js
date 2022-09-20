import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const double = useRef(true)

  useEffect(() => {
    if(double.current){
      double.current = false
      console.log('Effect!')
    }


  }, [])

  return (
    <div className="App">
      <p>Hello world!</p>
    </div>
  );
}

export default App;
