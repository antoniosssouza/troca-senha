import React from 'react'
import Header from './components/Header/Header'
import "./App.scss"
import Tasks from './components/Tasks/Tasks'
import { db } from './db'

const App = () => {
  return (
    <>
      <Header />
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <Tasks dados={ db } />
    </>
  );
}

export default App