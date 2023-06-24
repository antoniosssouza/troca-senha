import React, { useState } from 'react'
import './index.scss'
import pencil from '../../assets/pencil.svg'
import bin from '../../assets/bin.svg'
import plus from '../../assets/plus.svg'


const Tasks = ({dados}) => {
  const [tasks, setTasks] = useState(dados);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  
  
  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskEdit = (taskId) => {
    {console.log(taskId)};
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
    setEditedTitle(taskToEdit.title);
    setEditedDescription(taskToEdit.description);
  };

  const handleTaskUpdate = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingTask.id) {
        return {
          ...task,
          title: editedTitle,
          description: editedDescription,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTask(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleAddTask = () => {
    const newTaskId = tasks.length + 1;
    const newTaskObj = {
      id: newTaskId,
      title: newTask,
      description: '',
      completed: false,
    };
    if (newTask.length >= 3){
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleTaskDelete = (taskId) => {
    setTaskToDelete(taskId);
    setShowConfirmation(true);
  };

  const confirmDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(updatedTasks);
    setTaskToDelete(null);
    setShowConfirmation(false);
  };

  const cancelDeleteTask = () => {
    setTaskToDelete(null);
    setShowConfirmation(false);
  };

  return (
    <section>
      <div className="tasks">
        <h2 className="tasks__title">Tarefas</h2>
        <h2 className="tasks__status">Status</h2>
        <h2 className="tasks__options">Opções</h2>
      </div>
      <hr />
      {
        tasks.map(task => (
          <div className='list content' key={task.id}>
            <h3>{task.title}</h3>
            <label>
              <input 
                type="checkbox" 
                checked={task.completed} 
                className="list__status" 
                onChange={() => handleCheckboxChange(task.id)}
              />
              <span><img src="" alt="" /></span>
            </label>
            <div className="list__options">
              <img src={pencil} alt="edit" className="list__img" onClick={() => handleTaskEdit(task.id)}/>
              <img src={bin} alt="delete" className="list__img" onClick={() => handleTaskDelete(task.id)}/>
            </div>
          </div>
        ))
      }
      <div className="addSection">
        <input type="text" value={newTask} placeholder='Adicionar tarefa...' onChange={(event) => setNewTask(event.target.value)}/><img src={plus} alt="add" onClick={handleAddTask}/>
      </div>
      {editingTask && (
          <div className='editingBox modal'>
            <h2>Editar Tarefa</h2>
            <form action="" className='editingBox__form'>
                <div className='editingBox__inputSection'>               
                  <h3>Título: </h3>
                  <input
                    id='editingTitle'
                    type="text"
                    value={editedTitle}
                    onChange={(event) => setEditedTitle(event.target.value)}
                  />
                </div>
                <div className='editingBox__inputSection'>
                  <h3>Descrição: </h3>
                  <textarea
                    id='editingDescription'
                    value={editedDescription}
                    rows="3" cols="40"
                    onChange={(event) => setEditedDescription(event.target.value)}
                  />
                </div>
              <div className='modal__formButtons'>
                <button onClick={handleTaskUpdate} className='modal__formButtons--btnAction'>Salvar</button>
                <button onClick={handleCancelEdit} className='modal__formButtons--btnCancel'>Cancelar</button>
              </div>
            </form>
          </div>     
        )}
        {showConfirmation && (
        <div className="modal">
          <h2>Tem certeza de que deseja excluir esta tarefa?</h2>
          <div className='modal__formButtons'>
            <button onClick={confirmDeleteTask} className='modal__formButtons--btnAction'>Sim</button>
            <button onClick={cancelDeleteTask} className='modal__formButtons--btnCancel'>Não</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Tasks