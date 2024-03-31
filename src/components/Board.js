import { useState } from "react";
import Section from "./Section";
import { Col, Form, Button, Modal } from "react-bootstrap";
import { taskSections } from "../package/const";
import { useSelector } from "react-redux";

const NewTaskModal = ({ show, handleClose }) => {
    return (
        <Modal className="modalBackground" show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="modalTitle">Create a new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label >
                        Task name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Task name"
                        aria-label="Task name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >
                        Current status
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <button type='button' className='createButton' onClick={handleClose}>
                    Cancel
                </button>
                <button type='button' className='createButton'>
                    Create
                </button>
            </Modal.Footer>
        </Modal>
    );
};

const Board = () => {
    const tasks = useSelector(state => state.tasks);
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    return (
        <>
            <div className='actionBar'>
                <button type='button' className='createButton' onClick={() => setIsNewTaskModalOpen(!isNewTaskModalOpen)}>
                    <i className="bi bi-plus"></i> Create a new task
                </button>
            </div>
            {taskSections.map(section => (
                <Col lg={3} md={3} sm={4} xs={12} key={section.title}>
                    <Section title={section.title} tasks={tasks} category={section.category} />
                </Col>
            ))}
            {isNewTaskModalOpen && (
                <NewTaskModal show={isNewTaskModalOpen} handleClose={() => setIsNewTaskModalOpen(!isNewTaskModalOpen)} />
            )}
        </>
    );
};

export default Board;