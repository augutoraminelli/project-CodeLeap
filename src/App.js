import { useState } from 'react';
import { ModalSignup } from './components/ModalSingup';
import logo from './images/logo.png';
import './styles/home.css';

function App() {

  const [showModalSignup, setShowModalSignup] = useState(false);

  const openModalSignup = () => {
    setShowModalSignup(prev => !prev);
  }

  return (
    <div className='home-background'>
      <img alt="logo" className="logo" src={ logo } />
      <button
          className="signup-button"
          onClick={ openModalSignup }
        >
          Signup
        </button>
        <ModalSignup showModal={showModalSignup} />
    </div>
  );
}

export default App;
