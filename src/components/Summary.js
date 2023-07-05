import { useSelector } from 'react-redux'

const Summary = () => {
    const tasks = useSelector(state => state.tasks)
    const completed = tasks.filter(task => task.status === true)
    const todos = tasks.filter(task => task.status !== true)

    return (
        <div className="summaryDisplaySection">
            <h3>Summary</h3>
            <div>
                <p className="summaryTxt">
                    <i className="bi bi-list-check summaryIcon all"></i>
                    <span>All tasks</span>
                    <span>{tasks.length}</span>
                </p>
                <p className="summaryTxt">
                    <i className="bi bi-check2-all summaryIcon completed"></i>
                    <span>Completed tasks</span>
                    <span>{completed.length}</span>
                </p>
                <p className="summaryTxt">
                    <i className="bi bi-clipboard2-x summaryIcon pending"></i>
                    <span>Pending tasks</span>
                    <span>{todos.length}</span>
                </p>
            </div>
        </div>
    )
}

export default Summary