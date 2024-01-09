import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeContainer from './container/HomeContainer';
import ErrorPage from './container/ErrorPage';
import LoginContainer from './container/LoginContainer';
import PublicLayout from './Layout/PublicLayout';
import TableForm from './container/TableForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PublicLayout/>
        <Routes>
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/editlist" element={<TableForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
