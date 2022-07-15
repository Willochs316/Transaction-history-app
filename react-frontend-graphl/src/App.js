import { Route, Routes } from 'react-router-dom';
import './App.css';
import Amount from './Components/Amount/Amount';
import Date from './Components/Date/Date';
import Home from './Components/Home/Home';
import Mode from './Components/Mode/Mode';
import NavBar from './Components/NavBar/NavBar';
import UserName from './Components/Name/Name';

const App = () => {
  return (
    <div className='App'>
      <div className='transaction-conatainer'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserName />} />
          <Route path='/mode' element={<Mode />} />
          <Route path='/date' element={<Date />} />
          <Route path='/amount' element={<Amount />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
