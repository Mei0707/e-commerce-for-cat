import './App.css';
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      {/* <div className='text-primary m-5'>home</div> */}
      <NavItems/>
      <div className='min-vh-100'>
        <Outlet />
      </div>

      <Footer/>
    </>
  );
}

export default App
