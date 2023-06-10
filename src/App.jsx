import { useState } from 'react'
import './App.css'


import axios from 'axios'
import Header from './components/Header'
import ModalForm from './components/ModalForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='font-["Roboto"]'>
   
    <Header />
    <ModalForm   />
    </main>
  )
}

export default App
