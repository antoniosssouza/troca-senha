import React, { useState } from 'react'
import './index.scss'
import pencil from '../../assets/pencil.svg'
import bin from '../../assets/bin.svg'

const Tasks = ({dados}) => {
  const [data, setData ]= useState(dados);
  const handleCheckboxChange = (taskId) => {
    console.log(taskId)
  }

  return (
    data.map(data => (
      <div className='list' key={data.id}>
        <h3>{data.title}</h3>
        <input type="checkbox" checked={data.completed} className="list__status" onChange={() => handleCheckboxChange(data.id)}/>
        <div className="list__options">
          <img src={pencil} alt="edit" className="list__img" />
          <img src={bin} alt="delete" className="list__img" />
        </div>
      </div>
    ))
    
  );
}

export default Tasks