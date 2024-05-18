
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Side_Nav from './Navigation/Side_Nav';
import Share_Content from './userSet/Share_Conent';
function App() {


  return (
    <>

<BrowserRouter>
    <Routes>
      <Route path='/Signup' Component={SignUp}  />
      <Route path='/Login' Component={Login}  />
      <Route path='/Home' Component={Home}  />
      <Route path='/Side_Nav' Component={Side_Nav}  />
      <Route path='/Share_Content' Component={Share_Content}  />
    </Routes>

    </BrowserRouter>


    </>
  );
}

export default App;
