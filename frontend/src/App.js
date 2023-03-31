
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/landingPage';
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import React from 'react';
import Createnote from './screens/Createnote/Createnote';
import SingleNote from './screens/singleNote/SingleNote';
import { useState } from 'react';
import ProfileScreen from './screens/profileScreen/ProfileScreen';

function App() {
  const  [search, setsearch] = useState("")
  return (
    <div className='' >
      <BrowserRouter>
        <Header setsearch={setsearch} />
        <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/login' element={<LoginScreen/>}/>
       <Route path='/register' element={<RegisterScreen/>}/>
       <Route path='/create' element={<Createnote/>}/> 
       <Route path='/mynote' element={<MyNotes search={search}/>}/>
       <Route path='/note/:id' element={<SingleNote/>}/>
       <Route path='/profile' element={<ProfileScreen/>}/>
       </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
