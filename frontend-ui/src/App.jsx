import SignupCard from './pages/signup/signup';
import './App.css';
import LoginCard from './pages/login/login';
// import CardComponent from './components/card';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppNotFound from './components/pageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginCard/>}/>
      <Route path='/register' element={<SignupCard/>}/>
      <Route path='/*' element={<AppNotFound/>}/>

    </Routes>
    </BrowserRouter>


    // <div>
    //  <LoginCard></LoginCard>
    //  <SignupCard></SignupCard>


    // </div>
  );
}

export default App;
