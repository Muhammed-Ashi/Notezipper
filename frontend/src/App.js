
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/landingPage';
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
function App() {
  return (
    <div className='' >
      <BrowserRouter>
        <Header />
        <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/mynote' element={<MyNotes/>}/>
       </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
