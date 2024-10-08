import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppSignupCard from './pages/signup/signup';
import AppLoginCard from './pages/login/login';
import NotFound from './components/pageNotFound';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div>
        {/* <h1>Hello from App!</h1> */}
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path="/login" element={<AppLoginCard />} />
          <Route path="/register" element={<AppSignupCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//   //   <div>
//   //   <h1>Hello dfkldfjkldjflkdj</h1>
//   // </div>
//   <Router>
//     <Routes>
//       <Route path="/register" element={<SignupCard />} />
//       <Route path="/login" element={<LoginCard />} />
//       <Route path="/*" element={<AppNotFound />} />
//     </Routes>
//   </Router>
//   );
// }

export default App;