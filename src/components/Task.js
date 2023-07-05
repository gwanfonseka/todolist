import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import taskServices from '../services/taskServices'
import { setTasks } from '../reducers/taskReducer'
import Search from './Search'

const Task = () => {
    const dispatch = useDispatch()
    const originalTaskList = useSelector(state => state.tasks)

    // filter tasks
    const tasks = useSelector(({ tasks, search }) => {
        if (search === '') {
            return [...tasks]
        }
        else {
            let searchResult = []
            tasks.forEach(task => {
                let bool = task.title.toLowerCase().includes(search)
                if (bool === true) {
                    searchResult.push(task)
                }
            })
            return searchResult
        }
    })

    // generate new task
    const handleNewTask = async () => {
        try {
            const newTask = await taskServices.generateName()
            const { activity, key } = newTask
            const updatedTasks = tasks.concat({ no: Number(key), title: activity, status: false })
            dispatch(setTasks(updatedTasks))
        } catch (error) {
            console.log(error)
        }
    }

    // delete task
    const handleDelete = (task) => {
        const listExcludingTask = originalTaskList.filter(n => n.no !== task.no)
        dispatch(setTasks(listExcludingTask))
    }

    // toggle task status
    const toggleComplete = (task) => {
        const updatedTasks = tasks.map(n => {
            if (n.no === task.no) {
                let updatedTask = { ...n, status: !n.status }
                return updatedTask
            }
            return n
        })
        dispatch(setTasks(updatedTasks))
    }

    return (
        <div className="taskDisplaySection">
            <h3>Tasks <span className="addNewTask" onClick={() => handleNewTask()}>Add new <i className="bi bi-plus-square"></i></span></h3>
            <Search />
            {tasks.length === 0 ?
                <p>No tasks available</p> :
                <div className="taskList">
                    {tasks.map(task => {
                        return (
                            <div key={task.no} className={task.status === false ? 'taskWrapper' : 'completedTaskWrapper'}>
                                <span className="deleteButton" onClick={() => handleDelete(task)}><i className="bi bi-trash3"></i></span>
                                <div className="taskNumberStatus">
                                    <p>
                                        <span className="taskNumber">Task ID: {task.no}</span>
                                        <span className="taskStatus">{task.status === true ? 'done' : 'not done'}</span>
                                    </p>
                                </div>
                                <Form>
                                    <Form.Check className={task.status === false ? 'taskName' : 'taskName strikeText'} type="checkbox" value={task.status} onChange={() => toggleComplete(task)} id={task.no} label={task.title} />
                                </Form>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Task