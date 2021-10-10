import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Bangun Tidur',
      day: 'Senin, 8 Okt 2021',
      reminder: true,
    },

    {
      id: 2,
      text: 'Olahraga',
      day: 'Senin, 8 Okt 2021',
      reminder: true,
    },

    {
      id: 3,
      text: 'Sarapan',
      day: 'Senin, 8 Okt 2021',
      reminder: true,
    },

    {
      id: 4,
      text: 'Bersih-bersih',
      day: 'Senin, 8 Okt 2021',
      reminder: false,
    },
  ])

  //delete task
  const deleteTask = (id) => {
    console.log('delete', id);
  }


  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App