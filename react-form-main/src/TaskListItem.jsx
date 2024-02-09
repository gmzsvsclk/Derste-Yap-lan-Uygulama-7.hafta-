import React from 'react'

function TaskListItem({item, editTask, removeTask, doneTask}) {
  return (
   <>
     <li className={`list-group-item ${item.isDone && 'bg-success bg-gradient'}`} 
                key={item.uuid}>
                 {item.priority && <span 
                 className='badge text-bg-secondary m-2'>Zorunlu!</span>}   
                {item.task}
                <div className='btn-group float-end' role="group">

                <button onClick={()=>doneTask(item.uuid)} 
                className='btn btn-sm btn-success float-end'>Bitti Olarak İşaretle</button>
                
                <button onClick={()=>removeTask(item.uuid)} 
                className='btn btn-sm btn-danger float-end'>Kaldır</button>
                </div>
            
            </li>
   </>
  )
}

export default TaskListItem