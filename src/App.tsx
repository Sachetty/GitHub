import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import TemplateGlobal from './styles/TemplateGlobal';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path= '/' element={<Profile/>}/>
      <Route path= '/:username' element={<Profile/>}/>
      <Route path= '/:username/:repositoryname' element={<Repository/>}/>
      {/* <Route path= '/:username/starred' element={<Repository/>}/>  https://api.github.com/repos/facebook/react/pulls*/}
    </Routes>

    <TemplateGlobal/>
    </BrowserRouter>
  );
}

export default App;
