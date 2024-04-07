import { useState } from "react";
import Section from "./Section";
import { Col } from "react-bootstrap";
import { taskSections } from "../package/const";
import { useSelector, useDispatch } from "react-redux";
import NewTaskModal from "./modals/NewTaskModal";
import { setTasks } from "../reducers/taskReducer";
import { generateTaskId } from "../package/utils";

const Board = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    const onTaskCreate = (task) => {
        const newTask = { ...task, id: generateTaskId() }
        dispatch(setTasks([...tasks, newTask]));
    }

    return (
        <>
            <div className='actionBar'>
                <button type='button' className='createButton' onClick={() => setIsNewTaskModalOpen(!isNewTaskModalOpen)}>
                    <i className="bi bi-plus"></i> Create a new task
                </button>
            </div>
            {taskSections.map(section => (
                <Col lg={3} md={3} sm={4} xs={12} key={section.title}>
                    <Section title={section.title} tasks={tasks.filter(task => task.status === section.category)} />
                </Col>
            ))}
            {isNewTaskModalOpen && (
                <NewTaskModal
                    show={isNewTaskModalOpen}
                    handleClose={() => setIsNewTaskModalOpen(!isNewTaskModalOpen)}
                    handleSubmit={onTaskCreate}
                />
            )}
        </>
    );
};

export default Board;