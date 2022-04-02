import { useState } from 'react';
import { ModalSingup } from './components/ModalSingup';
import logo from './images/logo.png';
import './styles/home.css';

function App() {

  const [showModalSingup, setShowModalSignup] = useState(false);

  const openModalSingup = () => {
    setShowModalSignup(prev => !prev);
  }

  return (
    <div className='home-background'>
      <img alt="logo" className="logo" src={ logo } />
      <button
          className="singup-button"
          onClick={ openModalSingup }
        >
          Signup
        </button>
        <ModalSingup showModal={showModalSingup} />
    </div>
  );
}

export default App;
