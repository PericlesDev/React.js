
import './App.css'
import { useState } from 'react'
import Modal from './components/modal'

function App() {
   const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      Péricles dos Santos - Modal
      <div>
      <button onClick={() => setOpenModal(true)}>Abrir o Modal</button>
    </div>
    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
     Conteudo do Modal

    </Modal>
    </div>
  )
}

export default App
