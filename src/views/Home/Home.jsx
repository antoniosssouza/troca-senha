import React from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import Tasks from '../../components/Tasks/Tasks'
import { db } from '../../db'

const Home = () => {
  return (
    <>
      <Header />
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div className="tasks">
        <h2 className="tasks__title">Tarefas</h2>
        <h2 className="tasks__status">Status</h2>
        <h2 className="tasks__options">Opções</h2>
      </div>
      <hr />
      <Tasks dados={ db } />
    </>
  );
}

export default Home