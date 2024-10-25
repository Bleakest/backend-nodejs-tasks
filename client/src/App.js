import React, { useEffect, useState } from 'react';
import {Application, Form, Login} from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/form');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err));
  }, [])
  console.log(state);
  

  return (
    <div className="App">

      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/application' element={<Application />} />
        <Route path='/login' element={<Login />} />
      </Routes>
     

      {/* вывод данных, полученных с сервера Express */}
      <div>
          {state}
      </div>
    </div>
  );
}

export default App;