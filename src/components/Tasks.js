const tasks = [
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
]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
