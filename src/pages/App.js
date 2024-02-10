import '../style/css/main.css'
import MainHomePage from '../components/mainHomePage';
import Modal from '../components/modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false)


  return (
    <>
      <MainHomePage/>
    </>
  );
}

export default App;
