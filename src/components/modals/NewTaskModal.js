import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

const NewTaskModal = ({ show, handleClose, handleSubmit }) => {
    const [taskName, setTaskName] = useState('')
    const [status, setStatus] = useState('')

    const handleCreate = () => {
        if (taskName && status) {
            handleSubmit({ taskName, status })
            handleClose()
        }
    };

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
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >
                        Current status
                    </Form.Label>
                    <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" hidden>Select the status</option>
                        <option value="todo">To do</option>
                        <option value="inprogress">In progress</option>
                        <option value="done">Done</option>
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <button type='button' className='createButton' onClick={handleClose}>
                    Cancel
                </button>
                <button type='button' className='createButton' onClick={handleCreate}>
                    Create
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewTaskModal;