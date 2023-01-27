import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import PetForm from './components/PetForm';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<PetForm />} path="/pets/new" />
        <Route element={<Detail />} path="/pets/:id" />
        <Route element={<Update/>} path="/pets/:id/edit"/>
      </Routes>
    </div>
  );
}
export default App;
