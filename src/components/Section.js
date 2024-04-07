import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setTasks } from '../reducers/taskReducer'

const SectionHeader = styled.h3`
    font-size: 20px;
`;

const TaskWrapper = styled.div`
    background-color: var(--main);
    border-radius: 8px;
    padding: 20px 20px;
    margin-bottom: 15px;
    position: relative;
    border-left: 5px solid ${({ status }) => status === 'done' ? 'green' : status === 'inprogress' ? 'orange' : 'red'};

    &>.taskHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &>.taskName p{
        margin-top: 10px;
    }
`;

const Section = ({ title, tasks }) => {
    const dispatch = useDispatch()
    const originalTaskList = useSelector(state => state.tasks)

    // delete task
    const handleDelete = (task) => {
        const listExcludingTask = originalTaskList.filter(n => n.id !== task.id)
        dispatch(setTasks(listExcludingTask))
    }

    return (
        <div className="taskDisplaySection">
            <SectionHeader>{title}</SectionHeader>
            {tasks.length === 0 ?
                <div className="taskList">No tasks available</div> :
                <div className="taskList">
                    {tasks.map(task => {
                        return (
                            <TaskWrapper key={task.id} status={task.status}>
                                <div className='taskHeader'>
                                    <span className="taskNumber">{task.id}</span>
                                    <span className="deleteButton" onClick={() => handleDelete(task)}><i className="bi bi-trash3"></i></span>
                                </div>
                                <div className='taskName'>
                                    <p>{task.taskName}</p>
                                </div>
                            </TaskWrapper>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Section